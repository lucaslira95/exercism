//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = phrase => 
    phrase.toUpperCase().split(/[\ \-]/g).map(word => word.match(/[A-Z]/)).join('');
