# Project Mission
Create a lightweight, browser-based web application that acts as a random loadout generator for the game Helldivers 2. The user interface should feel like a tactical "slot machine" where users can roll for a complete loadout and selectively filter out items they do not currently own.

# Tech Stack
* **Frontend:** HTML5, CSS3, and Vanilla JavaScript.
* **Architecture:** A single-page application (SPA) running entirely in the browser. No backend server is required. 
* **Data Storage:** Store the equipment lists locally within a structured JSON object or JavaScript arrays in the code.

# Core Data Structure Requirements
The application must contain data arrays for the following categories:
1. **Primary Weapons** (e.g., AR-23 Liberator, SG-225 Breaker)
2. **Secondary Weapons** (e.g., P-2 Peacemaker, P-19 Redeemer)
3. **Grenades** (e.g., G-12 High Explosive, G-16 Impact)
4. **Stratagems** (e.g., Orbital Precision Strike, Eagle Airstrike, Autocannon)

# Core Logic & Features
1. **The Initial Roll:** A prominent "Generate Loadout" button that randomly selects:
    * 1 Primary Weapon
    * 1 Secondary Weapon
    * 1 Grenade
    * 4 distinct Stratagems (no duplicates)
2. **The "Slot Machine" Exclusion Loop:** * Next to every generated item in the UI, include an "I don't have this" (exclude) button.
    * Clicking this button must remove that specific item from the active pool of available gear.
    * The application must then immediately reroll *only* that specific slot, pulling a new random item from the remaining pool.
3. **Reset State:** A "Reset Pool" button to clear all exclusions and return the data arrays to their default, full state.

# Design & Vibe
* Use a dark, military-tactical UI (blacks, dark grays, and neon yellow/gold accents to mimic the in-game aesthetic).
* The layout should be mobile-responsive and easily readable, prioritizing the gear names and icons/placeholders.
