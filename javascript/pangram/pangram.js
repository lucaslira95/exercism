//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = text => {
    let table = {};
    text.toLowerCase().split('').map(char => {
        if (/[a-z]/.test(char) === true) table[char] = true;
    });
    return Object.keys(table).length === 26;
};
