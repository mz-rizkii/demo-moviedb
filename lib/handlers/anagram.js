/**
 * Compare 2 anagram words
 * @param {string} word 
 * @param {string} target 
 * @returns boolean if two words are anagram
 */
const hasSameLengthAndChar = (word, target) => {
    let target_char_count = 0;

    for (const word_char of word) {
        if(target.includes(word_char)) {
            target_char_count++;
        }
    } 

    return word.length === target.length && word.length === target_char_count;
} 

/**
 * group anagram words by number of letter & its character  
 * @param {string[]} input 
 * @returns string[]  
 */
const groupAnagramWords = (input) => {
    let result = [];

    return result;
};

module.exports = { groupAnagramWords, hasSameLengthAndChar };