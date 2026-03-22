const stratagemPaths = {
    "Eagle 500kg Bomb": "Hangar/Eagle%20500KG%20Bomb.svg",
    "Eagle Airstrike": "Hangar/Eagle%20Airstrike.svg",
    "Eagle Cluster Bomb": "Hangar/Eagle%20Cluster%20Bomb.svg",
    "Eagle Napalm Airstrike": "Hangar/Eagle%20Napalm%20Airstrike.svg",
    "Eagle 110mm Rocket Pods": "Hangar/Eagle%20110MM%20Rocket%20Pods.svg",
    "Eagle Strafing Run": "Hangar/Eagle%20Strafing%20Run.svg",
    "Eagle Smoke Strike": "Hangar/Eagle%20Smoke%20Strike.svg",
    "Orbital Precision Strike": "Bridge/Orbital%20Precision%20Strike.svg",
    "Orbital Gatling Barrage": "Orbital%20Cannons/Orbital%20Gatling%20Barrage.svg",
    "Orbital Airburst Strike": "Orbital%20Cannons/Orbital%20Airburst%20Strike.svg",
    "Orbital 120mm HE Barrage": "Orbital%20Cannons/Orbital%20120MM%20HE%20Barrage.svg",
    "Orbital 380mm HE Barrage": "Orbital%20Cannons/Orbital%20380MM%20HE%20Barrage.svg",
    "Orbital Walking Barrage": "Orbital%20Cannons/Orbital%20Walking%20Barrage.svg",
    "Orbital Laser": "Orbital%20Cannons/Orbital%20Laser.svg",
    "Orbital Railcannon Strike": "Orbital%20Cannons/Orbital%20Railcannon%20Strike.svg",
    "Orbital Gas Strike": "Bridge/Orbital%20Gas%20Strike.svg",
    "Orbital EMS Strike": "Bridge/Orbital%20EMS%20Strike.svg",
    "Orbital Smoke Strike": "Bridge/Orbital%20Smoke%20Strike.svg",
    "Orbital Napalm Barrage": "Orbital%20Cannons/Orbital%20Napalm%20Barrage.svg",
    "AC-8 Autocannon": "Patriotic%20Administration%20Center/Autocannon.svg",
    "APW-1 Anti-Materiel Rifle": "Patriotic%20Administration%20Center/Anti-Materiel%20Rifle.svg",
    "ARC-3 Arc Thrower": "Engineering%20Bay/Arc%20Thrower.svg",
    "EAT-17 Expendable Anti-Tank": "Patriotic%20Administration%20Center/Expendable%20Anti-Tank.svg",
    "EAT-700 Expendable Napalm": "Dust%20Devils/Expendable%20Napalm.svg",
    "FAF-14 Spear": "Patriotic%20Administration%20Center/Spear.svg",
    "FLAM-40 Flamethrower": "Patriotic%20Administration%20Center/Flamethrower.svg",
    "GL-21 Grenade Launcher": "Engineering%20Bay/Grenade%20Launcher.svg",
    "GR-8 Recoilless Rifle": "Patriotic%20Administration%20Center/Recoilless%20Rifle.svg",
    "LAS-98 Laser Cannon": "Engineering%20Bay/Laser%20Cannon.svg",
    "LAS-99 Quasar Cannon": "Engineering%20Bay/Quasar%20Cannon.svg",
    "M-105 Stalwart": "Patriotic%20Administration%20Center/Stalwart.svg",
    "MG-206 Heavy Machine Gun": "Patriotic%20Administration%20Center/Heavy%20Machine%20Gun.svg",
    "MG-43 Machine Gun": "Patriotic%20Administration%20Center/Machine%20Gun.svg",
    "MLS-4X Commando": "Patriotic%20Administration%20Center/Commando.svg",
    "RS-422 Railgun": "Patriotic%20Administration%20Center/Railgun.svg",
    "RL-77 Airburst Rocket Launcher": "Patriotic%20Administration%20Center/Airburst%20Rocket%20Launcher.svg",
    "StA-X3 W.A.S.P. Launcher": "Patriotic%20Administration%20Center/StA-X3%20W.A.S.P.%20Launcher.svg",
    "S-11 Speargun": "Dust%20Devils/Speargun.svg",
    "TX-41 Sterilizer": "Chemical%20Agents/Sterilizer.svg",
    "CQC-1 One True Flag": "Masters%20of%20Ceremony/One%20True%20Flag.svg",
    "GL-52 De-Escalator": "Force%20of%20Law/GL-52%20De-Escalator.svg",
    "PLAS-45 Epoch": "Control%20Group/Epoch.svg",
    "M-1000 Maxigun": "Python%20Commandos/Maxigun.svg",
    "CQC-9 Defoliation Tool": "Python%20Commandos/Defoliation%20Tool.svg",
    "CQC-20 Breaching Hammer": "Siege%20Breakers/CQC-20.svg",
    "EAT-411 Leveller": "Siege%20Breakers/EAT-411.svg",
    "GL-28 Belt-Fed Grenade Launcher": "Engineering%20Bay/Grenade%20Launcher.svg",
    "B-1 Supply Pack": "Engineering%20Bay/Supply%20Pack.svg",
    "AX/AR-23 Guard Dog": "Robotics%20Workshop/Guard%20Dog.svg",
    "AX/LAS-5 Rover": "Engineering%20Bay/Guard%20Dog%20Rover.svg",
    "LIFT-850 Jump Pack": "Hangar/Jump%20Pack.svg",
    "SH-20 Ballistic Shield Backpack": "Engineering%20Bay/Ballistic%20Shield%20Backpack.svg",
    "SH-32 Shield Generator Pack": "Engineering%20Bay/Shield%20Generator%20Pack.svg",
    "B/FLAM-80 Cremator": "Patriotic%20Administration%20Center/Flamethrower.svg",
    "B/MD C4 Pack": "Redacted%20Regiment/C4%20Pack.svg",
    "EXO-45 Patriot Exosuit": "Robotics%20Workshop/Patriot%20Exosuit.svg",
    "EXO-49 Emancipator Exosuit": "Robotics%20Workshop/Emancipator%20Exosuit.svg",
    "M-102 Fast Recon Vehicle": "Hangar/Fast%20Recon%20Vehicle.svg",
    "TD-220 Bastion": "Siege%20Breakers/Bastion%20MK%20XVI.svg",
    "A/MG-43 Machine Gun Sentry": "Patriotic%20Administration%20Center/Machine%20Gun.svg",
    "A/G-16 Gatling Sentry": "Robotics%20Workshop/Gatling%20Sentry.svg",
    "A/M-12 Mortar Sentry": "Robotics%20Workshop/Mortar%20Sentry.svg",
    "A/AC-8 Autocannon Sentry": "Patriotic%20Administration%20Center/Autocannon.svg",
    "A/MLS-4X Rocket Sentry": "Robotics%20Workshop/Rocket%20Sentry.svg",
    "A/M-23 EMS Mortar Sentry": "Robotics%20Workshop/EMS%20Mortar%20Sentry.svg",
    "A/ARC-3 Tesla Tower": "Bridge/Tesla%20Tower.svg",
    "A/GM-17 Gas Mortar Sentry": "Robotics%20Workshop/Mortar%20Sentry.svg",
    "MD-6 Anti-Personnel Minefield": "Engineering%20Bay/Anti-Personnel%20Minefield.svg",
    "MD-I4 Incendiary Mines": "Engineering%20Bay/Incendiary%20Mines.svg",
    "MD-17 Anti-Tank Mines": "Engineering%20Bay/Anti-Tank%20Mines.svg",
    "FX-12 Shield Generator Relay": "Bridge/Shield%20Generator%20Relay.svg",
    "E/MG-101 HMG Emplacement": "Bridge/HMG%20Emplacement.svg",
    "E/AT-12 Anti-Tank Emplacement": "Urban%20Legends/Anti-Tank%20Emplacement.svg",
    "E/GL-21 Grenadier Battlement": "Bridge/Grenadier%20Battlement.svg",
    "MS-11 Solo Silo": "Dust%20Devils/Solo%20Silo.svg"
};
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
    document.getElementById('loadout-top-row').innerHTML = '';
    document.getElementById('loadout-bottom-row').innerHTML = '';
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

function getImageUrl(itemName, category) {
    if (!itemName) return '';
    if (category === 'stratagems') {
        const path = stratagemPaths[itemName];
        return path ? 'https://cdn.jsdelivr.net/gh/nvigneux/Helldivers-2-Stratagems-icons-svg/master/' + path : '';
    } else {
        return 'https://helldivers.wiki.gg/wiki/Special:FilePath/' + encodeURIComponent(itemName.replace(/ /g, '_')) + '_Primary_Render.png';
    }
}

function renderLoadout() {
    const topRow = document.getElementById('loadout-top-row');
    const bottomRow = document.getElementById('loadout-bottom-row');

    topRow.innerHTML = '';
    bottomRow.innerHTML = '';

    for (const [slotKey, itemName] of Object.entries(currentLoadout)) {
        if (itemName) {
            const category = slotCategoryMap[slotKey];
            const html = createCardHTML(itemName, slotKey, category);

            if (category === 'stratagems') {
                bottomRow.innerHTML += html;
            } else {
                topRow.innerHTML += html;
            }
        }
    }
}

function createCardHTML(itemName, slotKey, category) {
    // Basic escaping to prevent breaking HTML attributes
    const safeItemName = itemName.replace(/'/g, "&#39;").replace(/"/g, '&quot;');
    const imgSrc = getImageUrl(itemName, category);

    return `
        <div class="gear-card" data-slot="${slotKey}">
            <img src="${imgSrc}" alt="${safeItemName}" onerror="this.outerHTML='<div class=&quot;gear-image-placeholder&quot;>${safeItemName}</div>'" style="max-width:100%; height:120px; object-fit:contain; flex-shrink: 0;">
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
