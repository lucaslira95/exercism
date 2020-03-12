//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = phrase => phrase.toLowerCase().match(/\b[\w']+\b/g)
    .reduce((acc,word) => acc[word] ? {...acc, [word]: acc[word] + 1} : {...acc, [word]: 1}, {})
