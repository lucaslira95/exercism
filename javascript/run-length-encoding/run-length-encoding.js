//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = text => {
    let count = 1, encoded = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i + 1]) count++;
        else {
            if (count === 1) encoded += text[i];
            else encoded += count.toString() + text[i];
            count = 1;
        }
    }
    return encoded;
};

export const decode = encoded => {
    function decoder(_, n, char) {
        return char.repeat(parseInt(n) || 1);
    }
    return encoded.replace(/(\d*)(.)/g, decoder);
}