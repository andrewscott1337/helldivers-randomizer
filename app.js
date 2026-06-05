const weaponImageMap = {
    "AR-23 Liberator": "imgi_5_AR-23_Liberator_Primary_Render.webp",
    "AR-23P Liberator Penetrator": "imgi_7_AR-23P_Liberator_Penetrator_Primary_Render.webp",
    "AR-23C Liberator Concussive": "imgi_9_AR-23C_Liberator_Concussive_Primary_Render.webp",
    "StA-52 Assault Rifle": "imgi_10_StA-52_Assault_Rifle_Primary_Render.webp",
    "AR-32 Pacifier": "imgi_11_AR-32_Pacifier_Primary_Render.webp",
    "AR-2 Coyote": "imgi_12_AR-2_Coyote_Primary_Render.webp",
    "MA5C Assault Rifle": "imgi_13_MA5C_Assault_Rifle_Primary_Render.webp",
    "AR-23A Liberator Carbine": "imgi_14_AR-23A_Liberator_Carbine_Primary_Render.webp",
    "AR-61 Tenderizer": "imgi_15_AR-61_Tenderizer_Primary_Render.webp",
    "BR-14 Adjudicator": "imgi_16_BR-14_Adjudicator_Primary_Render.webp",
    "AR/GL-21 One-Two": "imgi_17_AR-GL-21_One_Two_Primary_Render.webp",
    "AR-59 Suppressor": "imgi_18_AR-59_Suppressor_Primary_Render.webp",
    "R-2 Amendment": "imgi_19_R-2_Amendment_Primary_Render.webp",
    "R-2124 Constitution": "imgi_20_R-2124_Constitution_Primary_Render.webp",
    "R-6 Deadeye": "imgi_21_R-6_Deadeye_Primary_Render.webp",
    "R-63 Diligence": "imgi_22_R-63_Diligence_Primary_Render.webp",
    "R-63CS Diligence Counter Sniper": "imgi_23_R-63CS_Diligence_Counter_Sniper_Primary_Render.webp",
    "R-72 Censor": "imgi_24_R-72_Censor_Primary_Render.webp",
    "MP-98 Knight": "imgi_25_MP-98_Knight_Primary_Render.webp",
    "StA-11 SMG": "imgi_26_StA-11_SMG_Primary_Render.webp",
    "M7S SMG": "imgi_27_M7S_SMG_Primary_Render.webp",
    "SMG-32 Reprimand": "imgi_28_SMG-32_Reprimand_Primary_Render.webp",
    "SMG-37 Defender": "imgi_29_SMG-37_Defender_Primary_Render.webp",
    "SMG-72 Pummeler": "imgi_30_SMG-72_Pummeler_Primary_Render.webp",
    "SMG/FLAM-34 Stoker": "imgi_31_SMGFLAM-34_Stoker_Primary_Render.webp",
    "SG-8 Punisher": "imgi_33_SG-8_Punisher_Primary_Render.webp",
    "SG-8S Slugger": "imgi_34_SG-8S_Slugger_Primary_Render.webp",
    "SG-20 Halt": "imgi_35_SG-20_Halt_Primary_Render.webp",
    "SG-451 Cookout": "imgi_36_SG-451_Cookout_Primary_Render.webp",
    "M90A Shotgun": "imgi_38_M90A_Shotgun_Primary_Render.webp",
    "SMG-203 Gallant": "SMG-203_Gallant_Primary_Render.webp",
    "SG-225 Breaker": "imgi_39_SG-225_Breaker_Primary_Render.webp",
    "SG-225SP Breaker Spray&Pray": "imgi_40_SG-225SP_Breaker_Spray%26Pray_Primary_Render.webp",
    "SG-225IE Breaker Incendiary": "imgi_41_SG-225IE_Breaker_Incendiary_Primary_Render.webp",
    "CB-9 Exploding Crossbow": "imgi_43_CB-9_Exploding_Crossbow_Primary_Render.webp",
    "R-36 Eruptor": "imgi_44_R-36_Eruptor_Primary_Render.webp",
    "SG-8P Punisher Plasma": "imgi_45_SG-8P_Punisher_Plasma_Primary_Render.webp",
    "PLAS-39 Accelerator Rifle": "imgi_46_PLAS-39_Accelerator_Rifle_Primary_Render.webp",
    "ARC-12 Blitzer": "imgi_47_ARC-12_Blitzer_Primary_Render.webp",
    "LAS-5 Scythe": "imgi_48_LAS-5_Scythe_Primary_Render.webp",
    "LAS-16 Sickle": "imgi_49_LAS-16_Sickle_Primary_Render.webp",
    "LAS-17 Double-Edge Sickle": "imgi_50_LAS-17_Double-Edge_Sickle_Primary_Render.webp",
    "PLAS-1 Scorcher": "imgi_51_PLAS-1_Scorcher_Primary_Render.webp",
    "PLAS-101 Purifier": "imgi_52_PLAS-101_Purifier_Primary_Render.webp",
    "LAS-13 Trident": "imgi_53_LAS-13_Trident_Primary_Render.webp",
    "VG-70 Variable": "imgi_54_VG-70_Variable_Primary_Render.webp",
    "FLAM-66 Torcher": "imgi_55_FLAM-66_Torcher_Primary_Render.webp",
    "JAR-5 Dominator": "imgi_56_JAR-5_Dominator_Primary_Render.webp",
    "P-92 Warrant": "imgi_57_P-92_Warrant_Secondary_Render.webp",
    "P-2 Peacemaker": "imgi_58_P-2_Peacemaker_Secondary_Render.webp",
    "P-19 Redeemer": "imgi_59_P-19_Redeemer_Secondary_Render.webp",
    "P-113 Verdict": "imgi_60_P-113_Verdict_Secondary_Render.webp",
    "M6C/SOCOM Pistol": "imgi_61_M6C-SOCOM_Pistol_Secondary_Render.webp",
    "P-4 Senator": "imgi_62_P-4_Senator_Secondary_Render.webp",
    "P-69 Veto": "imgi_63_P-69_Veto_Secondary_Render.webp",
    "CQC-19 Stun Lance": "imgi_64_CQC-19_Stun_Lance_Secondary_Render.webp",
    "CQC-2 Saber": "imgi_65_CQC-2_Saber_Secondary_Render.webp",
    "CQC-30 Stun Baton": "imgi_66_CQC-30_Stun_Baton_Secondary_Render.webp",
    "CQC-5 Combat Hatchet": "imgi_67_CQC-5_Combat_Hatchet_Secondary_Render.webp",
    "CQC-73 Entrenchment Tool": "imgi_68_CQC-73_Entrenchment_Tool_Secondary_Render.webp",
    "CQC-42 Machete": "imgi_69_CQC-42_Machete_Secondary_Render.webp",
    "P-11 Stim Pistol": "imgi_70_P-11_Stim_Pistol_Secondary_Render.webp",
    "SG-22 Bushwhacker": "imgi_72_SG-22_Bushwhacker_Secondary_Render.webp",
    "LAS-58 Talon": "imgi_73_LAS-58_Talon_Secondary_Render.webp",
    "P-72 Crisper": "imgi_74_P-72_Crisper_Secondary_Render.webp",
    "GP-31 Grenade Pistol": "imgi_75_GP-31_Grenade_Pistol_Secondary_Render.webp",
    "LAS-7 Dagger": "imgi_76_LAS-7_Dagger_Secondary_Render.webp",
    "GP-20 Ultimatum": "imgi_77_GP-20_Ultimatum_Secondary_Render.webp",
    "PLAS-15 Loyalist": "imgi_79_PLAS-15_Loyalist_Secondary_Render.webp",
    "P-35 Re-Educator": "imgi_80_P-35_Re-Educator_Secondary_Render.webp",
    "TED-63 Dynamite": "imgi_81_TED-63_Dynamite_Throwable_Render.webp",
    "G-6 Frag": "imgi_82_G-6_Frag_Throwable_Render.webp",
    "G-12 High Explosive": "imgi_83_G-12_High_Explosive_Throwable_Render.webp",
    "G-10 Incendiary": "imgi_84_G-10_Incendiary_Throwable_Render.webp",
    "G-7 Pineapple": "imgi_85_G-7_Pineapple_Throwable_Render.webp",
    "G-16 Impact": "imgi_86_G-16_Impact_Throwable_Render.webp",
    "G-13 Incendiary Impact": "imgi_87_G-13_Incendiary_Impact_Throwable_Render.webp",
    "G-23 Stun": "imgi_88_G-23_Stun_Throwable_Render.webp",
    "G-4 Gas": "imgi_89_G-4_Gas_Throwable_Render.webp",
    "G-50 Seeker": "imgi_90_G-50_Seeker_Throwable_Render.webp",
    "G-3 Smoke": "imgi_91_G-3_Smoke_Throwable_Render.webp",
    "G-123 Thermite": "imgi_92_G-123_Thermite_Throwable_Render.webp",
    "K-2 Throwing Knife": "imgi_94_K-2_Throwing_Knife_Throwable_Render.webp",
    "G-142 Pyrotech": "imgi_95_G-142_Pyrotech_Throwable_Render.webp",
    "G-109 Urchin": "imgi_96_G-109_Urchin_Throwable_Render.webp",
    "G-31 Arc": "imgi_97_G-31_ARC_Throwable_Render.webp",
    "TM-1 Lure Mine": "imgi_98_TM-1_Lure_Mine_Throwable_Render.webp",
    "G-89 Smokescreen": "imgi_100_G-89_Smokescreen_Throwable_Render.webp",
    "G/SH-39 Shield": "imgi_101_G-SH-39_Shield_Throwable_Render.webp",
    "G-48 Giga Grenade": "imgi_102_G-48_Giga_Grenade_Throwable_Render.webp",
    "MG-43 Machine Gun": "imgi_103_MG-43_Machine_Gun_Support_Render.webp",
    "APW-1 Anti-Materiel Rifle": "imgi_104_APW-1_Anti-Materiel_Rifle_Support_Render.webp",
    "M-105 Stalwart": "imgi_105_M-105_Stalwart_Support_Render.webp",
    "EAT-17 Expendable Anti-Tank": "imgi_106_EAT-17_Expendable_Anti-Tank_Support_Render.webp",
    "GR-8 Recoilless Rifle": "imgi_107_GR-8_Recoilless_Rifle_Support_Render.webp",
    "FLAM-40 Flamethrower": "imgi_108_FLAM-40_Flamethrower_Support_Render.webp",
    "AC-8 Autocannon": "imgi_109_AC-8_Autocannon_Support_Render.webp",
    "MG-206 Heavy Machine Gun": "imgi_110_MG-206_Heavy_Machine_Gun_Support_Render.webp",
    "RL-77 Airburst Rocket Launcher": "imgi_111_RL-77_Airburst_Rocket_Launcher_Support_Render.webp",
    "MLS-4X Commando": "imgi_112_MLS-4X_Commando_Support_Render.webp",
    "RS-422 Railgun": "imgi_113_RS-422_Railgun_Support_Render.webp",
    "FAF-14 Spear": "imgi_114_FAF-14_Spear_Support_Render.webp",
    "StA-X3 W.A.S.P. Launcher": "imgi_115_StA-X3_W.A.S.P._Launcher_Support_Render.webp",
    "GL-21 Grenade Launcher": "imgi_116_GL-21_Grenade_Launcher_Support_Render.webp",
    "LAS-98 Laser Cannon": "imgi_117_LAS-98_Laser_Cannon_Support_Render.webp",
    "ARC-3 Arc Thrower": "imgi_118_ARC-3_Arc_Thrower_Support_Render.webp",
    "LAS-99 Quasar Cannon": "imgi_119_LAS-99_Quasar_Cannon_Support_Render.webp",
    "TX-41 Sterilizer": "imgi_122_TX-41_Sterilizer_Support_Render.webp",
    "CQC-1 One True Flag": "imgi_123_CQC-1_One_True_Flag_Support_Render.webp",
    "GL-52 De-Escalator": "imgi_124_GL-52_De-Escalator_Support_Render.webp",
    "PLAS-45 Epoch": "imgi_125_PLAS-45_Epoch_Support_Render.webp",
    "S-11 Speargun": "imgi_126_S-11_Speargun_Support_Render.webp",
    "EAT-700 Expendable Napalm": "imgi_127_EAT-700_Expendable_Napalm_Support_Render.webp",
    "MS-11 Solo Silo": "imgi_128_MS-11_Solo_Silo_Support_Render.webp",
    "M-1000 Maxigun": "imgi_130_M-1000_Maxigun_Support_Render.webp",
    "CQC-9 Defoliation Tool": "imgi_131_CQC-9_Defoliation_Tool_Support_Render.webp",
    "B/MD C4 Pack": "imgi_132_B_MD_C4_Pack_Support_Render.webp",
    "CQC-20 Breaching Hammer": "imgi_133_CQC-20_Breaching_Hammer_Render.webp",
    "EAT-411 Leveller": "imgi_134_EAT-411_Leveller_Support_Render.webp",
    "GL-28 Belt-Fed Grenade Launcher": "imgi_135_GL-28_Belt-Fed_Grenade_Launcher_Support_Render.webp",
    "B/FLAM-80 Cremator": "imgi_136_B-FLAM-80_Cremator_Support_Render.webp",
    "SG-97 Sweeper": "imgi_42_SG-97_Shotgun_Primary_Render.webp",
    "DBS-2 Double Freedom": "imgi_37_DBS-2_Shotgun_Primary_Render.webp"
};

let allGear = null;
let activeGear = null;

const currentLoadout = {
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
            preloadWeaponImages();
        })
        .catch(error => console.error('Error fetching gear data:', error));

    document.getElementById('generate-btn').addEventListener('click', generateLoadout);
    document.getElementById('reset-btn').addEventListener('click', resetPoolAndClear);
    document.getElementById('war-status-btn').addEventListener('click', toggleWarStatus);
    document.addEventListener('click', handleExclude);
});

let isWarStatusView = false;
let hasFetchedWarStatus = false;

function toggleWarStatus() {
    const loadoutDisplay = document.getElementById('loadout-display');
    const warStatusDisplay = document.getElementById('war-status-display');
    const warStatusBtn = document.getElementById('war-status-btn');

    isWarStatusView = !isWarStatusView;

    if (isWarStatusView) {
        loadoutDisplay.style.display = 'none';
        warStatusDisplay.style.display = 'flex';
        warStatusBtn.textContent = 'BACK TO ARMORY';
        if (!hasFetchedWarStatus) {
            fetchWarStatus();
        }
    } else {
        warStatusDisplay.style.display = 'none';
        loadoutDisplay.style.display = 'flex';
        warStatusBtn.textContent = 'WAR STATUS';
    }
}

async function fetchWarStatus() {
    const headers = {
        'X-Super-Client': 'super-earth-loadout-generator',
        'X-Super-Contact': 'anonymous'
    };

    try {
        // Fetch War Status Data Concurrently
        const [assignmentsRes, campaignsRes, eventsRes, stationsRes] = await Promise.all([
            fetch('https://api.helldivers2.dev/api/v1/assignments', { headers }).catch(e => null),
            fetch('https://api.helldivers2.dev/api/v1/campaigns', { headers }).catch(e => null),
            fetch('https://api.helldivers2.dev/api/v1/planet-events', { headers }).catch(e => null),
            fetch('https://api.helldivers2.dev/api/v2/space-stations', { headers }).catch(e => null)
        ]);

        const assignments = assignmentsRes && assignmentsRes.ok ? await assignmentsRes.json() : null;
        const campaigns = campaignsRes && campaignsRes.ok ? await campaignsRes.json() : null;
        const events = eventsRes && eventsRes.ok ? await eventsRes.json() : null;
        const stations = stationsRes && stationsRes.ok ? await stationsRes.json() : null;

        const moContent = document.getElementById('major-order-content');
        if (assignments && assignments.length > 0) {
            const mo = assignments[0];
            moContent.innerHTML = `
                <div class="mo-title-wrapper">
                    <div class="mo-title">${mo.title || 'MAJOR ORDER'}</div>
                    <img src="./all-icons/Faction_SVGS/Helldiver_Icon.svg" class="mo-icon" alt="Helldiver Icon">
                </div>
                <div class="mo-briefing">${mo.briefing || 'No briefing available.'}</div>
            `;
        } else {
            moContent.innerHTML = `<div class="mo-briefing">No active Major Order from Super Earth Command.</div>`;
        }

        window.activePlanetEvents = events || [];
        window.activeSpaceStations = stations || [];

        // Render Events & Space Stations
        const eventsContainer = document.getElementById('events-and-stations-container');
        const eventsContent = document.getElementById('events-stations-content');

        let eventsHtml = '';

        if (window.activeSpaceStations.length > 0) {
            eventsHtml += '<div class="alert-section"><h3>🛰️ SPACE STATIONS</h3><ul class="alert-list">';
            window.activeSpaceStations.forEach(station => {
                eventsHtml += `<li>Orbiting <strong>${station.planet.name}</strong></li>`;
            });
            eventsHtml += '</ul></div>';
        }

        if (window.activePlanetEvents.length > 0) {
            eventsHtml += '<div class="alert-section"><h3>⚠️ ACTIVE PLANET EVENTS</h3><ul class="alert-list">';
            window.activePlanetEvents.forEach(ev => {
                const attackingFaction = ev.event && ev.event.faction ? ev.event.faction : 'Unknown Forces';
                eventsHtml += `<li><strong>${ev.name}</strong> is under attack by <strong>${attackingFaction}</strong></li>`;
            });
            eventsHtml += '</ul></div>';
        }

        if (eventsHtml !== '') {
            eventsContent.innerHTML = eventsHtml;
            eventsContainer.style.display = 'block';
        } else {
            eventsContainer.style.display = 'none';
        }

        const grid = document.getElementById('campaigns-grid');
        grid.innerHTML = ''; // Clear loading state

        if (campaigns && campaigns.length > 0) {
            const fragment = document.createDocumentFragment();
            campaigns.forEach(campaign => {
                const planet = campaign.planet;
                const maxHealth = planet.maxHealth || 1000000;
                const currentHealth = planet.health || 0;
                const isDefending = planet.event !== null;

                let progressPercent = 0;
                if (isDefending && planet.event) {
                    progressPercent = (planet.event.health / planet.event.maxHealth) * 100;
                } else {
                    progressPercent = 100 - ((currentHealth / maxHealth) * 100);
                }

                const card = document.createElement('div');
                card.className = 'campaign-card';

                const activeFaction = isDefending ? (planet.event.faction || 'Unknown') : (planet.currentOwner || 'Unknown');
                let factionIconFile = '';
                if (activeFaction.toLowerCase().includes('terminid')) factionIconFile = 'Terminid_Icon.svg';
                else if (activeFaction.toLowerCase().includes('illuminate')) factionIconFile = 'Illuminate_Icon.svg';
                else if (activeFaction.toLowerCase().includes('automaton')) factionIconFile = 'Automaton_Icon.svg';
                const factionIconHtml = factionIconFile ? `<img src="./all-icons/Faction_SVGS/${factionIconFile}" class="faction-icon" alt="${activeFaction} Icon">` : '';

                const hasEvent = window.activePlanetEvents.some(ev => ev.index === planet.index);
                const hasStation = window.activeSpaceStations.some(st => st.planet.index === planet.index);

                let badgesHtml = '';
                if (hasEvent || hasStation) {
                    badgesHtml += '<div class="campaign-badges">';
                    if (hasEvent) badgesHtml += '<span class="campaign-badge event-badge">⚠️ Active Event</span>';
                    if (hasStation) badgesHtml += '<span class="campaign-badge station-badge">🛰️ Space Station</span>';
                    badgesHtml += '</div>';
                }

                card.innerHTML = `
                    ${factionIconHtml}
                    ${badgesHtml}
                    <h3 class="planet-name">${planet.name}</h3>
                    <p class="planet-sector">${planet.sector || 'Unknown Sector'}</p>
                    <div class="faction-info">
                        <span>Defending: ${isDefending ? 'Super Earth' : (planet.currentOwner || 'Unknown')}</span>
                        <span>Attacking: ${isDefending ? (planet.event.faction || 'Unknown') : 'Super Earth'}</span>
                    </div>
                    <div class="progress-container">
                        <div class="progress-bar" style="width: ${progressPercent.toFixed(2)}%"></div>
                        <div class="progress-text">${progressPercent.toFixed(2)}% ${isDefending ? 'Defended' : 'Liberated'}</div>
                    </div>
                `;
                fragment.appendChild(card);
            });
            grid.appendChild(fragment);
        } else {
            grid.innerHTML = '<p>No active campaigns at this time.</p>';
        }

        hasFetchedWarStatus = true;
    } catch (error) {
        console.error('Error fetching war status:', error);
        document.getElementById('major-order-content').innerHTML = '<p>Error establishing communication with Super Earth Command.</p>';
        document.getElementById('campaigns-grid').innerHTML = '<p>Failed to retrieve sector status.</p>';
    }
}

function preloadWeaponImages() {
    if (typeof Image !== 'undefined') {
        for (const imageName of Object.values(weaponImageMap)) {
            const img = new Image();
            img.src = `./weapon-icons-webp/${imageName}`;
        }
    }
}

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
    if (isWarStatusView) toggleWarStatus();
    localStorage.removeItem('activeGear');
    activeGear = structuredClone(allGear);
    document.getElementById('top-row').innerHTML = '';
    document.getElementById('bottom-row').innerHTML = '';
}

function getSecureRandomInt(max) {
    if (max <= 0) return 0;
    const array = new Uint32Array(1);
    const limit = (4294967296 - (4294967296 % max));
    let randomInt;
    do {
        window.crypto.getRandomValues(array);
        randomInt = array[0];
    } while (randomInt >= limit);
    return randomInt % max;
}

function getRandomItem(array) {
    if (!array || array.length === 0) return null;
    const randomIndex = getSecureRandomInt(array.length);
    return array[randomIndex];
}

function getDistinctItems(array, count) {
    if (!array || array.length === 0) return [];
    const result = [...array];
    const n = result.length;
    const k = Math.min(count, n);

    for (let i = 0; i < k; i++) {
        const j = i + getSecureRandomInt(n - i);
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
    }

    return result.slice(0, k);
}

function generateLoadout() {
    if (isWarStatusView) toggleWarStatus();
    if (!activeGear) return;

    currentLoadout.primaryWeapon = getRandomItem(activeGear.primaryWeapons);
    currentLoadout.secondaryWeapon = getRandomItem(activeGear.secondaryWeapons);
    currentLoadout.grenade = getRandomItem(activeGear.grenades);

    const stratagems = getDistinctItems(activeGear.stratagems, 4);
    currentLoadout.stratagem1 = stratagems[0] || null;
    currentLoadout.stratagem2 = stratagems[1] || null;
    currentLoadout.stratagem3 = stratagems[2] || null;
    currentLoadout.stratagem4 = stratagems[3] || null;

    const specialOrderToggle = document.getElementById('special-orders-toggle');
    const specialOrderBanner = document.getElementById('special-order-banner');

    if (specialOrderToggle && specialOrderToggle.checked && activeGear.specialOrders && activeGear.specialOrders.length > 0) {
        const challenge = getRandomItem(activeGear.specialOrders);
        const iconName = challenge.replace(/[\s,]+/g, '_') + '.svg';

        specialOrderBanner.innerHTML = '';
        const img = document.createElement('img');
        img.src = `./challenge-icons/${iconName}`;
        img.alt = challenge;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.onerror = function() {
            this.style.display = 'none';
        };
        img.onload = function() {
            this.style.display = 'block';
        };

        const textSpan = document.createElement('span');
        textSpan.textContent = `CAUTION: ${challenge}`;

        specialOrderBanner.appendChild(img);
        specialOrderBanner.appendChild(textSpan);
        specialOrderBanner.style.display = 'flex';
    } else if (specialOrderBanner) {
        specialOrderBanner.style.display = 'none';
    }

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
        cleanName = cleanName.replace(/(\d+)mm/gi, '$1MM');

        // Strip weapon prefix codes
        cleanName = cleanName.replace(WEAPON_PREFIX_REGEX, '');

        const resultUrl = `./all-icons/${encodeURIComponent(cleanName)}.svg`;
        stratagemImageCache[itemName] = resultUrl;
        return resultUrl;
    }

    if (weaponImageMap[itemName]) {
        return `./weapon-icons-webp/${weaponImageMap[itemName]}`;
    }

    return '';
}

function renderLoadout() {
    const topRow = document.getElementById('top-row');
    const bottomRow = document.getElementById('bottom-row');

    // Clear the rows out before we append the new ones in!
    topRow.innerHTML = '';
    bottomRow.innerHTML = '';

    const topFragment = document.createDocumentFragment();
    const bottomFragment = document.createDocumentFragment();

    for (const [slotKey, itemName] of Object.entries(currentLoadout)) {
        if (itemName) {
            if (TOP_ROW_SLOTS.has(slotKey)) {
                topFragment.appendChild(createCardElement(itemName, slotKey));
            } else {
                bottomFragment.appendChild(createCardElement(itemName, slotKey));
            }
        }
    }

    topRow.appendChild(topFragment);
    bottomRow.appendChild(bottomFragment);
}

function replaceWithPlaceholder(imgElement, itemName) {
    const placeholder = document.createElement('div');
    placeholder.className = 'gear-image-placeholder';
    placeholder.textContent = itemName;
    imgElement.replaceWith(placeholder);
}

function handleImageError(imgElement, itemName) {
    let mapImg = weaponImageMap[itemName];
    if (mapImg && !imgElement.src.includes('weapon-icons-webp')) {
        imgElement.onerror = function() {
            replaceWithPlaceholder(imgElement, itemName);
        };
        imgElement.src = './weapon-icons-webp/' + mapImg;
    } else {
        replaceWithPlaceholder(imgElement, itemName);
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
    img.loading = 'lazy';
    img.decoding = 'async';
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
