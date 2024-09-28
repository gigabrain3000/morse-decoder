const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newString = '';
    for (let i = 0; i < expr.length; i++) {
        if ((i + 1) % 2 === 0) {
            if (`${expr[i-1]}${expr[i]}` === "10") {
                newString += ".";
            } else if (`${expr[i-1]}${expr[i]}` === "11") {
                newString += "-";
            } else if (`${expr[i-1]}${expr[i]}` === "**") {
                newString += "*";
            } else {
                newString += " ";
            }
        }
    }
    
    let arr = [];
    for (let i = 0; i < newString.length + 1; i++) {
        if (!(i % 5) && i != 0) {
            arr.push(newString.slice(i - 5, i).trim());
        }
    }
    arr.map((item, index) => {MORSE_TABLE[item] ? arr.splice(index, 1, MORSE_TABLE[item]) : arr.splice(index, 1, " ")});
    return arr.join("");
}

module.exports = {
    decode
}