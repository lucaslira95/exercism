//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (x, y) => {
    const num = Math.hypot(x, y);

    const game = [
        { maxUnit: 1, score: 10 },
        { maxUnit: 5, score: 5 },
        { maxUnit: 10, score: 1 },
        { maxUnit: +Infinity, score: 0 }
    ];

    return game.find(({ maxUnit }) => maxUnit >= num).score;
};
