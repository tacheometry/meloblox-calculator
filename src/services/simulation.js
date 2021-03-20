// TODO: # Simulation Chambers #
/*
    The idea is to create a virtual environment where you would simulate your drops and create a average/median drops 

    Ideas of monsters Array:
        - parse from JSON ???
        - create a custom array of what we need
*/

const simulate = ({
    numberOfCycles,
    goldFind,
    magicFind,
    quantityFind,
    monsters = Array // Probs will be an Array of monsters to go through
}) => {
    // Safe-Parsing to Int so I can use them as numbers
    numberOfCycles = parseInt(numberOfCycles);
    goldFind = parseInt(goldFind);
    magicFind = parseInt(magicFind);
    quantityFind = parseInt(quantityFind);

    let cyclesIdx = 0;
    let monstersIdx = 0;

    for (monstersIdx in monsters.length) {
        for (cyclesIdx in numberOfCycles) {
            // loop through and create the results for each monster
        }
    }


    return {
        // result
    }
};

export default simulate;