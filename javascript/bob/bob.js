//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = message => {

    message = message.trim();
    const hasLetters = /[a-z]/i.test(message);
    const isQuestion = message.slice(-1) === '?';
    const isYelling = message === message.toUpperCase();

    if (!message.length) return 'Fine. Be that way!'
    if (isYelling && isQuestion && hasLetters) return 'Calm down, I know what I\'m doing!'
    if (isQuestion) return 'Sure.'
    if (isYelling && hasLetters) return 'Whoa, chill out!'
    return 'Whatever.'
};
