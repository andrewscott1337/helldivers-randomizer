let allGear = null;
let activeGear = null;

let currentLoadout = {
    primaryWeapon: null,
    secondaryWeapon: null,
    grenade: null,
    stratagem1: null,
    stratagem2: null,
    stratagem3: null,
    stratagem4: null
};

const slotCategoryMap = {
    primaryWeapon: 'primaryWeapons',
    secondaryWeapon: 'secondaryWeapons',
    grenade: 'grenades',
    stratagem1: 'stratagems',
    stratagem2: 'stratagems',
    stratagem3: 'stratagems',
    stratagem4: 'stratagems'
};

document.addEventListener('DOMContentLoaded', () => {
    fetch('gear_data.json')
        .then(response => response.json())
        .then(data => {
            allGear = data;
            initPool();
        })
        .catch(error => console.error('Error fetching gear data:', error));

    document.getElementById('generate-btn').addEventListener('click', generateLoadout);
    document.getElementById('reset-btn').addEventListener('click', resetPoolAndClear);
    document.getElementById('loadout-display').addEventListener('click', handleExclude);
});

function initPool() {
    const savedGear = localStorage.getItem('activeGear');
    if (savedGear) {
        try {
            activeGear = JSON.parse(savedGear);
        } catch (e) {
            console.error('Error parsing saved gear, resetting:', e);
            activeGear = JSON.parse(JSON.stringify(allGear));
        }
    } else {
        activeGear = JSON.parse(JSON.stringify(allGear));
    }
}

function savePool() {
    if (activeGear) {
        localStorage.setItem('activeGear', JSON.stringify(activeGear));
    }
}

function resetPool() {
    activeGear = JSON.parse(JSON.stringify(allGear));
    savePool();
}

function resetPoolAndClear() {
    localStorage.removeItem('activeGear');
    activeGear = JSON.parse(JSON.stringify(allGear));
    document.getElementById('loadout-display').innerHTML = '';
}

function getRandomItem(array) {
    if (!array || array.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function getDistinctItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function generateLoadout() {
    if (!activeGear) return;

    currentLoadout.primaryWeapon = getRandomItem(activeGear.primaryWeapons);
    currentLoadout.secondaryWeapon = getRandomItem(activeGear.secondaryWeapons);
    currentLoadout.grenade = getRandomItem(activeGear.grenades);

    const stratagems = getDistinctItems(activeGear.stratagems, 4);
    currentLoadout.stratagem1 = stratagems[0] || null;
    currentLoadout.stratagem2 = stratagems[1] || null;
    currentLoadout.stratagem3 = stratagems[2] || null;
    currentLoadout.stratagem4 = stratagems[3] || null;

    renderLoadout();
}

function getImageUrl(itemName) {
    if (!itemName) return '';
    return 'https://helldivers.wiki.gg/images/' + encodeURIComponent(itemName.replace(/ /g, '_')) + '_Icon.png';
}

function renderLoadout() {
    const display = document.getElementById('loadout-display');
    display.innerHTML = '';

    for (const [slotKey, itemName] of Object.entries(currentLoadout)) {
        if (itemName) {
            display.innerHTML += createCardHTML(itemName, slotKey);
        }
    }
}

function createCardHTML(itemName, slotKey) {
    // Basic escaping to prevent breaking HTML attributes
    const safeItemName = itemName.replace(/'/g, "&#39;").replace(/"/g, '&quot;');
    const imgSrc = getImageUrl(itemName);

    return `
        <div class="gear-card" data-slot="${slotKey}">
            <img src="${imgSrc}" alt="${safeItemName}" onerror="this.outerHTML='<div class=&quot;gear-image-placeholder&quot;>${safeItemName}</div>'" style="max-width:100%; height:120px; object-fit:contain;">
            <h3>${safeItemName}</h3>
            <button class="exclude-btn" data-slot="${slotKey}" data-item="${safeItemName}">I don't have this</button>
        </div>
    `;
}

function handleExclude(event) {
    if (event.target.classList.contains('exclude-btn')) {
        const slotKey = event.target.getAttribute('data-slot');
        const itemNameRaw = event.target.getAttribute('data-item');
        const itemName = itemNameRaw.replace(/&#39;/g, "'").replace(/&quot;/g, '"');

        const category = slotCategoryMap[slotKey];

        // Remove item permanently from active session pool
        const itemIndex = activeGear[category].indexOf(itemName);
        if (itemIndex > -1) {
            activeGear[category].splice(itemIndex, 1);
            savePool();
        }

        rerollSlot(slotKey);
    }
}

function rerollSlot(slotKey) {
    const category = slotCategoryMap[slotKey];
    const availableItems = activeGear[category];

    let newItem = null;

    if (category === 'stratagems') {
        const currentStratagems = [
            currentLoadout.stratagem1,
            currentLoadout.stratagem2,
            currentLoadout.stratagem3,
            currentLoadout.stratagem4
        ];

        const validItems = availableItems.filter(item => !currentStratagems.includes(item));
        newItem = getRandomItem(validItems);
    } else {
        newItem = getRandomItem(availableItems);
    }

    if (newItem) {
        currentLoadout[slotKey] = newItem;
    } else {
        currentLoadout[slotKey] = "NO ITEMS LEFT";
    }

    renderLoadout();
}
