//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = text => {
    let table = new Set;
    text.toLowerCase().split('').map(char => {
        if (/[a-z]/.test(char) === true) table.add(char);
    });
    return table.size === 26;
};
