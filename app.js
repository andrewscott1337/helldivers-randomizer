const weaponImageMap = {
    "AR-23 Liberator": "imgi_5_AR-23_Liberator_Primary_Render.png",
    "AR-23P Liberator Penetrator": "imgi_7_AR-23P_Liberator_Penetrator_Primary_Render.png",
    "AR-23C Liberator Concussive": "imgi_9_AR-23C_Liberator_Concussive_Primary_Render.png",
    "StA-52 Assault Rifle": "imgi_10_StA-52_Assault_Rifle_Primary_Render.png",
    "AR-32 Pacifier": "imgi_11_AR-32_Pacifier_Primary_Render.png",
    "AR-2 Coyote": "imgi_12_AR-2_Coyote_Primary_Render.png",
    "MA5C Assault Rifle": "imgi_13_MA5C_Assault_Rifle_Primary_Render.png",
    "AR-23A Liberator Carbine": "imgi_14_AR-23A_Liberator_Carbine_Primary_Render.png",
    "AR-61 Tenderizer": "imgi_15_AR-61_Tenderizer_Primary_Render.png",
    "BR-14 Adjudicator": "imgi_16_BR-14_Adjudicator_Primary_Render.png",
    "AR/GL-21 One-Two": "imgi_17_AR-GL-21_One_Two_Primary_Render.png",
    "AR-59 Suppressor": "imgi_18_AR-59_Suppressor_Primary_Render.png",
    "R-2 Amendment": "imgi_19_R-2_Amendment_Primary_Render.png",
    "R-2124 Constitution": "imgi_20_R-2124_Constitution_Primary_Render.png",
    "R-6 Deadeye": "imgi_21_R-6_Deadeye_Primary_Render.png",
    "R-63 Diligence": "imgi_22_R-63_Diligence_Primary_Render.png",
    "R-63CS Diligence Counter Sniper": "imgi_23_R-63CS_Diligence_Counter_Sniper_Primary_Render.png",
    "R-72 Censor": "imgi_24_R-72_Censor_Primary_Render.png",
    "MP-98 Knight": "imgi_25_MP-98_Knight_Primary_Render.png",
    "StA-11 SMG": "imgi_26_StA-11_SMG_Primary_Render.png",
    "M7S SMG": "imgi_27_M7S_SMG_Primary_Render.png",
    "SMG-32 Reprimand": "imgi_28_SMG-32_Reprimand_Primary_Render.png",
    "SMG-37 Defender": "imgi_29_SMG-37_Defender_Primary_Render.png",
    "SMG-72 Pummeler": "imgi_30_SMG-72_Pummeler_Primary_Render.png",
    "SMG/FLAM-34 Stoker": "imgi_31_SMGFLAM-34_Stoker_Primary_Render.png",
    "SG-8 Punisher": "imgi_33_SG-8_Punisher_Primary_Render.png",
    "SG-8S Slugger": "imgi_34_SG-8S_Slugger_Primary_Render.png",
    "SG-20 Halt": "imgi_35_SG-20_Halt_Primary_Render.png",
    "SG-451 Cookout": "imgi_36_SG-451_Cookout_Primary_Render.png",
    "M90A Shotgun": "imgi_38_M90A_Shotgun_Primary_Render.png",
    "SG-225 Breaker": "imgi_39_SG-225_Breaker_Primary_Render.png",
    "SG-225SP Breaker SprayPray": "imgi_40_SG-225SP_Breaker_Spray%26Pray_Primary_Render.png",
    "SG-225IE Breaker Incendiary": "imgi_41_SG-225IE_Breaker_Incendiary_Primary_Render.png",
    "CB-9 Exploding Crossbow": "imgi_43_CB-9_Exploding_Crossbow_Primary_Render.png",
    "R-36 Eruptor": "imgi_44_R-36_Eruptor_Primary_Render.png",
    "SG-8P Punisher Plasma": "imgi_45_SG-8P_Punisher_Plasma_Primary_Render.png",
    "PLAS-39 Accelerator Rifle": "imgi_46_PLAS-39_Accelerator_Rifle_Primary_Render.png",
    "ARC-12 Blitzer": "imgi_47_ARC-12_Blitzer_Primary_Render.png",
    "LAS-5 Scythe": "imgi_48_LAS-5_Scythe_Primary_Render.png",
    "LAS-16 Sickle": "imgi_49_LAS-16_Sickle_Primary_Render.png",
    "LAS-17 Double-Edge Sickle": "imgi_50_LAS-17_Double-Edge_Sickle_Primary_Render.png",
    "PLAS-1 Scorcher": "imgi_51_PLAS-1_Scorcher_Primary_Render.png",
    "PLAS-101 Purifier": "imgi_52_PLAS-101_Purifier_Primary_Render.png",
    "LAS-13 Trident": "imgi_53_LAS-13_Trident_Primary_Render.png",
    "VG-70 Variable": "imgi_54_VG-70_Variable_Primary_Render.png",
    "FLAM-66 Torcher": "imgi_55_FLAM-66_Torcher_Primary_Render.png",
    "JAR-5 Dominator": "imgi_56_JAR-5_Dominator_Primary_Render.png",
    "P-92 Warrant": "imgi_57_P-92_Warrant_Secondary_Render.png",
    "P-2 Peacemaker": "imgi_58_P-2_Peacemaker_Secondary_Render.png",
    "P-19 Redeemer": "imgi_59_P-19_Redeemer_Secondary_Render.png",
    "P-113 Verdict": "imgi_60_P-113_Verdict_Secondary_Render.png",
    "M6C/SOCOM Pistol": "imgi_61_M6C-SOCOM_Pistol_Secondary_Render.png",
    "P-4 Senator": "imgi_62_P-4_Senator_Secondary_Render.png",
    "P-69 Veto": "imgi_63_P-69_Veto_Secondary_Render.png",
    "CQC-19 Stun Lance": "imgi_64_CQC-19_Stun_Lance_Secondary_Render.png",
    "CQC-2 Saber": "imgi_65_CQC-2_Saber_Secondary_Render.png",
    "CQC-30 Stun Baton": "imgi_66_CQC-30_Stun_Baton_Secondary_Render.png",
    "CQC-5 Combat Hatchet": "imgi_67_CQC-5_Combat_Hatchet_Secondary_Render.png",
    "CQC-73 Entrenchment Tool": "imgi_68_CQC-73_Entrenchment_Tool_Secondary_Render.png",
    "CQC-42 Machete": "imgi_69_CQC-42_Machete_Secondary_Render.png",
    "P-11 Stim Pistol": "imgi_70_P-11_Stim_Pistol_Secondary_Render.png",
    "SG-22 Bushwhacker": "imgi_72_SG-22_Bushwhacker_Secondary_Render.png",
    "LAS-58 Talon": "imgi_73_LAS-58_Talon_Secondary_Render.png",
    "P-72 Crisper": "imgi_74_P-72_Crisper_Secondary_Render.png",
    "GP-31 Grenade Pistol": "imgi_75_GP-31_Grenade_Pistol_Secondary_Render.png",
    "LAS-7 Dagger": "imgi_76_LAS-7_Dagger_Secondary_Render.png",
    "GP-20 Ultimatum": "imgi_77_GP-20_Ultimatum_Secondary_Render.png",
    "PLAS-15 Loyalist": "imgi_79_PLAS-15_Loyalist_Secondary_Render.png",
    "P-35 Re-Educator": "imgi_80_P-35_Re-Educator_Secondary_Render.png",
    "TED-63 Dynamite": "imgi_81_TED-63_Dynamite_Throwable_Render.png",
    "G-6 Frag": "imgi_82_G-6_Frag_Throwable_Render.png",
    "G-12 High Explosive": "imgi_83_G-12_High_Explosive_Throwable_Render.png",
    "G-10 Incendiary": "imgi_84_G-10_Incendiary_Throwable_Render.png",
    "G-7 Pineapple": "imgi_85_G-7_Pineapple_Throwable_Render.png",
    "G-16 Impact": "imgi_86_G-16_Impact_Throwable_Render.png",
    "G-13 Incendiary Impact": "imgi_87_G-13_Incendiary_Impact_Throwable_Render.png",
    "G-23 Stun": "imgi_88_G-23_Stun_Throwable_Render.png",
    "G-4 Gas": "imgi_89_G-4_Gas_Throwable_Render.png",
    "G-50 Seeker": "imgi_90_G-50_Seeker_Throwable_Render.png",
    "G-3 Smoke": "imgi_91_G-3_Smoke_Throwable_Render.png",
    "G-123 Thermite": "imgi_92_G-123_Thermite_Throwable_Render.png",
    "K-2 Throwing Knife": "imgi_94_K-2_Throwing_Knife_Throwable_Render.png",
    "G-142 Pyrotech": "imgi_95_G-142_Pyrotech_Throwable_Render.png",
    "G-109 Urchin": "imgi_96_G-109_Urchin_Throwable_Render.png",
    "G-31 Arc": "imgi_97_G-31_ARC_Throwable_Render.png",
    "TM-1 Lure Mine": "imgi_98_TM-1_Lure_Mine_Throwable_Render.png",
    "G-89 Smokescreen": "imgi_100_G-89_Smokescreen_Throwable_Render.png",
    "G/SH-39 Shield": "imgi_101_G-SH-39_Shield_Throwable_Render.png",
    "G-48 Giga Grenade": "imgi_102_G-48_Giga_Grenade_Throwable_Render.png",
    "MG-43 Machine Gun": "imgi_103_MG-43_Machine_Gun_Support_Render.png",
    "APW-1 Anti-Materiel Rifle": "imgi_104_APW-1_Anti-Materiel_Rifle_Support_Render.png",
    "M-105 Stalwart": "imgi_105_M-105_Stalwart_Support_Render.png",
    "EAT-17 Expendable Anti-Tank": "imgi_106_EAT-17_Expendable_Anti-Tank_Support_Render.png",
    "GR-8 Recoilless Rifle": "imgi_107_GR-8_Recoilless_Rifle_Support_Render.png",
    "FLAM-40 Flamethrower": "imgi_108_FLAM-40_Flamethrower_Support_Render.png",
    "AC-8 Autocannon": "imgi_109_AC-8_Autocannon_Support_Render.png",
    "MG-206 Heavy Machine Gun": "imgi_110_MG-206_Heavy_Machine_Gun_Support_Render.png",
    "RL-77 Airburst Rocket Launcher": "imgi_111_RL-77_Airburst_Rocket_Launcher_Support_Render.png",
    "MLS-4X Commando": "imgi_112_MLS-4X_Commando_Support_Render.png",
    "RS-422 Railgun": "imgi_113_RS-422_Railgun_Support_Render.png",
    "FAF-14 Spear": "imgi_114_FAF-14_Spear_Support_Render.png",
    "StA-X3 W.A.S.P. Launcher": "imgi_115_StA-X3_W.A.S.P._Launcher_Support_Render.png",
    "GL-21 Grenade Launcher": "imgi_116_GL-21_Grenade_Launcher_Support_Render.png",
    "LAS-98 Laser Cannon": "imgi_117_LAS-98_Laser_Cannon_Support_Render.png",
    "ARC-3 Arc Thrower": "imgi_118_ARC-3_Arc_Thrower_Support_Render.png",
    "LAS-99 Quasar Cannon": "imgi_119_LAS-99_Quasar_Cannon_Support_Render.png",
    "TX-41 Sterilizer": "imgi_122_TX-41_Sterilizer_Support_Render.png",
    "CQC-1 One True Flag": "imgi_123_CQC-1_One_True_Flag_Support_Render.png",
    "GL-52 De-Escalator": "imgi_124_GL-52_De-Escalator_Support_Render.png",
    "PLAS-45 Epoch": "imgi_125_PLAS-45_Epoch_Support_Render.png",
    "S-11 Speargun": "imgi_126_S-11_Speargun_Support_Render.png",
    "EAT-700 Expendable Napalm": "imgi_127_EAT-700_Expendable_Napalm_Support_Render.png",
    "MS-11 Solo Silo": "imgi_128_MS-11_Solo_Silo_Support_Render.png",
    "M-1000 Maxigun": "imgi_130_M-1000_Maxigun_Support_Render.png",
    "CQC-9 Defoliation Tool": "imgi_131_CQC-9_Defoliation_Tool_Support_Render.png",
    "B/MD C4 Pack": "imgi_132_B_MD_C4_Pack_Support_Render.png",
    "CQC-20 Breaching Hammer": "imgi_133_CQC-20_Breaching_Hammer_Render.png",
    "EAT-411 Leveller": "imgi_134_EAT-411_Leveller_Support_Render.png",
    "GL-28 Belt-Fed Grenade Launcher": "imgi_135_GL-28_Belt-Fed_Grenade_Launcher_Support_Render.png",
    "B/FLAM-80 Cremator": "imgi_136_B-FLAM-80_Cremator_Support_Render.png",
    "SG-97 Sweeper": "imgi_42_SG-97_Shotgun_Primary_Render.png",
    "DBS-2 Double Freedom": "imgi_37_DBS-2_Shotgun_Primary_Render.png"
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

const WEAPON_PREFIX_REGEX = /^[A-Z0-9\/-]+\s+/;
const TOP_ROW_SLOTS = new Set(['primaryWeapon', 'secondaryWeapon', 'grenade']);

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
    document.addEventListener('click', handleExclude);
});

function initPool() {
    const savedGear = localStorage.getItem('activeGear');
    if (savedGear) {
        try {
            activeGear = JSON.parse(savedGear);
        } catch (e) {
            console.error('Error parsing saved gear, resetting:', e);
            activeGear = structuredClone(allGear);
        }
    } else {
        activeGear = structuredClone(allGear);
    }
}

function savePool() {
    if (activeGear) {
        localStorage.setItem('activeGear', JSON.stringify(activeGear));
    }
}

function resetPoolAndClear() {
    localStorage.removeItem('activeGear');
    activeGear = structuredClone(allGear);
    document.getElementById('top-row').innerHTML = '';
    document.getElementById('bottom-row').innerHTML = '';
}

function getRandomItem(array) {
    if (!array || array.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function getDistinctItems(array, count) {
    if (!array || array.length === 0) return [];
    const result = [...array];
    const n = result.length;
    const k = Math.min(count, n);

    for (let i = 0; i < k; i++) {
        const j = i + Math.floor(Math.random() * (n - i));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result.slice(0, k);
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

const stratagemImageCache = {};

function getImageUrl(itemName, slotKey) {
    if (!itemName) return '';
    const isStratagem = slotKey && slotKey.startsWith('stratagem');

    if (isStratagem) {
        if (stratagemImageCache[itemName]) {
            return stratagemImageCache[itemName];
        }

        let cleanName = itemName;

        // Fix case sensitivity
        cleanName = cleanName.replace("120mm", "120MM").replace("380mm", "380MM");

        // Strip weapon prefix codes
        cleanName = cleanName.replace(WEAPON_PREFIX_REGEX, '');

        const resultUrl = `./all-icons/${encodeURI(cleanName)}.svg`;
        stratagemImageCache[itemName] = resultUrl;
        return resultUrl;
    }

    if (weaponImageMap[itemName]) {
        return `./weapon-icons/${weaponImageMap[itemName]}`;
    }

    return 'https://helldivers.wiki.gg/images/' + encodeURIComponent(itemName.replace(/ /g, '_')) + '_Icon.png';
}

function renderLoadout() {
    const topRow = document.getElementById('top-row');
    const bottomRow = document.getElementById('bottom-row');

    // Clear the rows out before we append the new ones in!
    topRow.innerHTML = '';
    bottomRow.innerHTML = '';

    for (const [slotKey, itemName] of Object.entries(currentLoadout)) {
        if (itemName) {
            if (TOP_ROW_SLOTS.has(slotKey)) {
                topRow.appendChild(createCardElement(itemName, slotKey));
            } else {
                bottomRow.appendChild(createCardElement(itemName, slotKey));
            }
        }
    }
}

function handleImageError(imgElement, itemName) {
    let mapImg = weaponImageMap[itemName];
    if (mapImg && !imgElement.src.includes('weapon-icons')) {
        imgElement.onerror = function() {
            const placeholder = document.createElement('div');
            placeholder.className = 'gear-image-placeholder';
            placeholder.textContent = itemName;
            imgElement.replaceWith(placeholder);
        };
        imgElement.src = './weapon-icons/' + mapImg;
    } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'gear-image-placeholder';
        placeholder.textContent = itemName;
        imgElement.replaceWith(placeholder);
    }
}

function createCardElement(itemName, slotKey) {
    const imgSrc = getImageUrl(itemName, slotKey);

    const card = document.createElement('div');
    card.className = 'gear-card';
    card.setAttribute('data-slot', slotKey);

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = itemName;
    img.style.maxWidth = '100%';
    img.style.height = '120px';
    img.style.objectFit = 'contain';
    img.onerror = function() {
        handleImageError(this, itemName);
    };

    const h3 = document.createElement('h3');
    h3.textContent = itemName;

    const button = document.createElement('button');
    button.className = 'exclude-btn';
    button.setAttribute('data-slot', slotKey);
    button.setAttribute('data-item', itemName);
    button.textContent = "I don't have this";

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(button);

    return card;
}

function handleExclude(event) {
    if (event.target.classList.contains('exclude-btn')) {
        const slotKey = event.target.getAttribute('data-slot');
        const itemName = event.target.getAttribute('data-item');

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
