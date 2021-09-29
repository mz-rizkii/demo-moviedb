/**
 * refactor to return valid string if 
 * 1. string input have ( and )
 * 2. ( is before )
 * 3. at least 1 char inside bracket, including space
 * @param {string} str 
 * @returns string string inside bracket '(' and ')'
 */
function findFirstStringInBracket(str) {
    const opening_bracket = '(';

    const closing_bracket = ')';

    let indexFirstBracketFound = str.length > 0 ? (str.indexOf(opening_bracket) + 1) : -1;
    
    let indexClosingBracketFound = str.length > 0 ? str.indexOf(closing_bracket) : -1;

    if (indexFirstBracketFound < 0 || indexClosingBracketFound < 0 
        || !(indexClosingBracketFound > indexFirstBracketFound && str.substring(indexFirstBracketFound, indexClosingBracketFound))) {
        return '';
    }

    return str.substring(indexFirstBracketFound, indexClosingBracketFound);
};

function findFirstStringInBracketOld(str) {
    if (str.length > 0) {
        let indexFirstBracketFound = str.indexOf("(");
        if (indexFirstBracketFound >= 0) {
            let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
            if (wordsAfterFirstBracket) {
                wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
                let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
                if (indexClosingBracketFound >= 0) {
                    return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
                }
                else {
                    return '';
                }
            } else {
                return '';
            }
        } else {
            return '';
        }
    } else {
        return '';
    }
};

module.exports = { findFirstStringInBracket, findFirstStringInBracketOld }
