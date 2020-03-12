//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number, base, toBase) => {
    if (base === 10 && toBase === 2) return decToBin(number, toBase);
    else if (base === 2 && toBase === 10) return binToDec(number, base);
};

const toInteger = x => {
    x = Number(x);
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}

const decToBin = (number, toBase) => {
    let filteredNumber = Number(number.toString().split(',').join('')),
        binary = [];

    while (filteredNumber > 1) {
        binary.push(filteredNumber % toBase);
        filteredNumber = toInteger(filteredNumber / toBase);
    }
    binary.push(filteredNumber);
    if (binary[0] === 0) {
        binary.splice(0, 1);
        binary.push(0);
    }
    return binary;
}

const binToDec = (number, base) => {
    let i = number.length - 1, accumulator = 0;
    number.forEach(num => {
        accumulator += num * Math.pow(base, i--);
    });
    return accumulator.toString().split('').map(alg => parseInt(alg));
}