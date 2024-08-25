function isDigit(char) {
    let asciiChar = char.charCodeAt(0);
    return 48 <= asciiChar && asciiChar <=57;
}


function isSpace(char) {
    return char === ' ';
}

function isUpperCase(char) {
    let asciiChar = char.charCodeAt(0);

    return 65 <= asciiChar && asciiChar <= 90;
}

function isLowwerCase(char) {
    let asciiChar = char.charCodeAt(0);

    return 97 <= asciiChar && asciiChar <= 122;
}

function isLetter(char) {
    let asciiChar = char.charCodeAt(0);

    return (65 <= asciiChar && asciiChar <= 90) || (97 <= asciiChar && asciiChar <= 122);
}

function isLetterOrDigit(char) {
  return isLetter(char) || isDigit(char)
}

function isSpecial(char) {
    return !isLetter(char) && !isDigit(char) && !isSpace(char);
}

function isVowel(char) {
    return 'aeouiAEOUI'.includes(char);
}



const CharacterHelper = {
    isDigit,
    isLowwerCase,
    isUpperCase,
    isLetter,
    isLetterOrDigit,
    isSpace,
    isVowel,
    isSpecial
};

module.exports.CharacterHelper = CharacterHelper;