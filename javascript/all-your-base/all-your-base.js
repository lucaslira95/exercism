//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (digits, inBase, toBase) => {
    const checkDigits = digits => {
      if (!digits.length) {
        throw new Error('Input has wrong format');
      }
      digits.forEach((value, index) => {
        if (
          (digits.length > 1 && index === 0 && value === 0) ||
          value < 0 ||
          value >= inBase ||
          !Number.isInteger(value)
        ) {
          throw new Error('Input has wrong format');
        }
      });
    };
  
    const checkBase = (base, name) => {
      if (!base || !Number.isInteger(base) || base < 2) {
        throw new Error(`Wrong ${name} base`);
      }
    };
  
    checkBase(inBase, 'input');
    checkBase(toBase, 'output');
    checkDigits(digits);
  
    const num = digits.reduce(
      (acc, cur, index, arr) => acc + cur * inBase ** (arr.length - index - 1),
      0,
    );
  
    const convertRecursive = (remains, res = []) => {
      if (remains) {
        res.push(remains % toBase);
        return convertRecursive(Math.floor(remains / toBase), res);
      } else {
        return res.length ? res.reverse() : [0];
      }
    };
  
    return convertRecursive(num);
  };