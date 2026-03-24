import os
import requests
from bs4 import BeautifulSoup
import urllib.parse
import json
import time

BASE_URL = "https://helldivers.wiki.gg"
WEAPONS_URL = f"{BASE_URL}/wiki/Weapons"
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://helldivers.wiki.gg/wiki/Weapons',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1'
}
OUTPUT_DIR = "scraped_images"

def setup_directory():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

def get_weapon_links():
    try:
        success = False
        for attempt in range(5):
            response = requests.get(WEAPONS_URL, headers=HEADERS)
            if response.status_code in [403, 429]:
                time.sleep(2 ** attempt)
                continue
            response.raise_for_status()
            soup = BeautifulSoup(response.text, 'html.parser')
            success = True
            break

        if not success:
            raise requests.RequestException(f"Failed to fetch weapons page after retries. Last status code: {response.status_code}")

        weapon_links = set()

        # Weapons are listed in a few ways.
        # They are usually linked within `.gallerytext big a` or in lists inside the tables.
        # Looking at the weapon page structure:
        for gallery in soup.find_all('div', class_='gallerytext'):
            big_tag = gallery.find('big')
            if big_tag:
                a_tag = big_tag.find('a')
                if a_tag and a_tag.has_attr('href'):
                    weapon_links.add(a_tag['href'])

        # Also let's get links from the tables
        for table in soup.find_all('table', class_='wikitable'):
            for tr in table.find_all('tr'):
                th = tr.find('th')
                if th:
                    a_tag = th.find('a')
                    if a_tag and a_tag.has_attr('href'):
                        weapon_links.add(a_tag['href'])

        return list(weapon_links)

    except requests.RequestException as e:
        print(f"Error fetching weapons page: {e}")
        return []

def extract_image_url(soup):
    # Method 1: Check json-ld script for ImageObject
    script_tags = soup.find_all('script', type='application/ld+json')
    for script in script_tags:
        try:
            data = json.loads(script.string)
            if 'image' in data and '@type' in data['image'] and data['image']['@type'] == 'ImageObject':
                if 'url' in data['image']:
                    return data['image']['url']
        except Exception:
            pass

    # Method 2: Check og:image meta tag
    meta_tag = soup.find('meta', property='og:image')
    if meta_tag and meta_tag.has_attr('content'):
        content = meta_tag['content']
        # The og:image might be a thumbnail (e.g. .../thumb/.../1200px-...)
        # Try to clean it up to get the original URL
        if '/thumb/' in content:
            # e.g., https://.../images/thumb/X/Y.png/1200px-Y.png
            parts = content.split('/')
            # remove the last part (1200px-Y.png) and 'thumb'
            try:
                thumb_idx = parts.index('thumb')
                original_url = '/'.join(parts[:thumb_idx] + parts[thumb_idx+1:-1])
                return original_url
            except ValueError:
                return content
        return content

    # Method 3: Find portable infobox image
    infobox = soup.find('aside', class_='portable-infobox')
    if infobox:
        figure = infobox.find('figure', class_='pi-image')
        if figure:
            a_tag = figure.find('a')
            if a_tag and a_tag.has_attr('href'):
                # it's a link to File page. Let's try to extract image from inside
                img_tag = a_tag.find('img')
                if img_tag and img_tag.has_attr('src'):
                    src = img_tag['src']
                    if '/thumb/' in src:
                        parts = src.split('/')
                        try:
                            thumb_idx = parts.index('thumb')
                            # e.g. /images/thumb/AR-23_Liberator_Primary_Render.png/300px-AR-23_Liberator_Primary_Render.png
                            # remove the last part and 'thumb'
                            original_url = '/'.join(parts[:thumb_idx] + parts[thumb_idx+1:-1])
                            if not original_url.startswith('http'):
                                original_url = f"{BASE_URL}{original_url}"
                            return original_url
                        except ValueError:
                            pass

                    if not src.startswith('http'):
                        src = f"{BASE_URL}{src}"
                    return src
    return None

def download_image(url, filename):
    try:
        success = False
        for attempt in range(3):
            response = requests.get(url, stream=True, headers=HEADERS)
            if response.status_code in [403, 429]:
                time.sleep(2 ** attempt)
                continue
            response.raise_for_status()
            filepath = os.path.join(OUTPUT_DIR, filename)
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            print(f"Downloaded: {filename}")
            success = True
            break
        if not success:
            print(f"Failed to download {url} after retries")
    except requests.RequestException as e:
        print(f"Error downloading {url}: {e}")

def main():
    setup_directory()
    print("Fetching weapon links...")
    links = get_weapon_links()
    print(f"Found {len(links)} weapon links.")

    for link in links:
        time.sleep(0.5)  # Respect rate limiting
        # Ignore non-wiki links or general category pages
        if not link.startswith('/wiki/') or link in ['/wiki/Weapons', '/wiki/Category:Weapons', '/wiki/Helldivers_1:Weapons']:
            continue

        weapon_name = urllib.parse.unquote(link.split('/wiki/')[1])
        url = f"{BASE_URL}{link}"

        try:
            success = False
            for attempt in range(3):
                session = requests.Session()
                session.headers.update(HEADERS)
                response = session.get(url)
                if response.status_code in [403, 429]:
                    time.sleep(2 ** attempt)
                    continue
                response.raise_for_status()
                soup = BeautifulSoup(response.text, 'html.parser')
                success = True
                break

            if not success:
                print(f"Failed to fetch {url} after retries")
                continue

            img_url = extract_image_url(soup)

            if img_url:
                # Get the filename from the URL, ignoring query parameters
                filename = urllib.parse.unquote(img_url.split('/')[-1].split('?')[0])
                # In case it's still a thumb-like name with size prefix like '300px-'
                if filename.count('-') > 0 and filename.split('-')[0].endswith('px'):
                    filename = '-'.join(filename.split('-')[1:])

                # Use weapon name as fallback prefix if filename is generic
                if not filename.endswith(('.png', '.jpg', '.jpeg', '.webp')):
                    filename = f"{weapon_name}.png"

                download_image(img_url, filename)
            else:
                print(f"No high-res image found for: {weapon_name}")

        except requests.RequestException as e:
            print(f"Error processing {weapon_name}: {e}")

if __name__ == "__main__":
    main()
