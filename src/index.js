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
    let word = ''
    let char = ''
    for (let i = 1; i <= expr.length; i++) {
        if (i % 10 === 0 && i > 0) {
            if (i === expr.length) {
                char += expr[i-1]
                word += getChar(char)
                return word
            }
            char += expr[i-1]
            word += getChar(char)
            char = ''
            continue

        }
        char += expr[i-1]
    }
    word += getChar(char)

    return word
}
function getChar(str) {
    if (str === '**********') {
        return str = ' '
    }
    let tire = str.replace(/11/g, '-')
    let dot = tire.replace(/10/g, '.')
    let clean = dot.replace(/0/g, '')
    if (MORSE_TABLE[clean]) {
        return MORSE_TABLE[clean]
    }
}
module.exports = {
    decode
}