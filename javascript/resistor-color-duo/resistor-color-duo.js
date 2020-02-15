//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

const colorCode = (color) => COLORS.indexOf(color);

export const decodedValue = ([a, b]) => colorCode(a) * 10 + colorCode(b);