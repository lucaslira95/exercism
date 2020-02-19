//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strand_a, strand_b) => {

    let distance = 0;

    if (strand_a === '' && strand_b !== '')
        throw new Error('left strand must not be empty');
    else if (strand_a !== '' && strand_b === '')
        throw new Error('right strand must not be empty');
    else if (strand_a.length !== strand_b.length)
        throw new Error('left and right strands must be of equal length');

    else {
        for (let i = 0; i < strand_a.length; i++) {
            if (strand_a[i] !== strand_b[i]) distance++;
        }
    }

    return distance;
};
