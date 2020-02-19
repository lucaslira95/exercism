//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = num => {
    let steps = 0;
    if (num < 1) throw new Error('Only positive numbers are allowed');
    else{
        while(num > 1){
            if(num % 2 === 0) num /= 2;
            else num = num * 3 + 1;
            steps++;
        }
    }
    return steps;
};
