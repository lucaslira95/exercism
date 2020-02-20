//
// This is only a SKELETON file for the 'etl' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = old => {
    let shiny = {};
    
    Object.entries(old).forEach(key => {
        key[1].forEach(value => shiny[value.toLowerCase()] = Number(key[0]));
    })

    return shiny;
};
