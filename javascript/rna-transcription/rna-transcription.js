//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const transcript = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
}

export const toRna = (dnaChain) => {
    return dnaChain.split('').map(dna => transcript[dna]).join('');
};
