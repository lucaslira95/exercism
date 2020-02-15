//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const codons = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP',
    'UAG': 'STOP',
    'UGA': 'STOP'
}

export const translate = (codonList) => {
    let proteins = [];
    if (!codonList) return proteins;
    else if(codonList.length % 3 != 0) throw new Error('Invalid codon');
    else {
        codonList.match(/.{1,3}/g).every(p => {
            if(codons[p] === 'STOP') return false;
            else if(!codons.hasOwnProperty(p)) throw new Error('Invalid codon');
            else {
                proteins.push(codons[p]);
                return true;
            }
        });
        return proteins;
    }
};
