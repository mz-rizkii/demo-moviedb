/**
 * Compare 2 anagram words
 * @param {string} word 
 * @param {string} target 
 * @returns boolean if two words are anagram
 */
const hasSameLengthAndChar = (word, target) => {
    let target_char_count = 0;

    for (const word_char of word) {
        if (target.includes(word_char)) {
            target_char_count++;
        }
    }

    return word.length === target.length && word.length === target_char_count;
}

/**
 * group anagram words by number of letter & its character  
 * loop each word if has no anagram previously add as new array string 
 * if word has anagram previously put as member to group index
 * @param {string[]} input list of words 
 * @returns string[][] group list of anagram words  
 */
const groupAnagramWords = (input) => {
    let result = [];

    let index = 0;

    while (index < input.length) {
        const word = input[index];

        let total_stored = 0;

        let group_index = 0;

        while (group_index < result.length) {
            const stored_group = result[group_index];

            if (hasSameLengthAndChar(stored_group[0], word)) {
                result[group_index].push(word)

                total_stored++;
            }

            group_index++;
        }

        if (total_stored < 1) {
            result.push([word]);
        }

        index++;
    }

    return result;
};

module.exports = { groupAnagramWords, hasSameLengthAndChar };