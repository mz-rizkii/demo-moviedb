const { expect } = require('chai')

const { groupAnagramWords, hasSameLengthAndChar } = require('../../lib/handlers/anagram')

/**
 * test for processing anagram array 
 * submission for 4. Logic Test 
 */
describe('Inspect Anagram helper', () => {
    it('Inspect anagram comparator', testAnagramComparator);

    it('Inspect anagram handler', testAnagramHandler);
});


function testAnagramComparator() {
    const comparison = [['makan', 'makna', true], ['kuda', 'daku', true], ['tidak', 'tindak', false], ['udud', 'dodo', false]]

    for (const [first_word, second_word, expected] of comparison) {
        const is_anagram = hasSameLengthAndChar(first_word, second_word)

        expect(is_anagram, `${first_word} and ${second_word} is ${expected ? '' : 'not'} anagram`).to.equal(expected)
    }
}

function testAnagramHandler() {
    const input = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

    const result = groupAnagramWords(input);

    const expected_result = [
        ["kita", "atik", "tika"],
        ["aku", "kua"],
        ["kia"],
        ["makan"]
    ]

    expect(result, 'the result should have number of group as expected result').to.have.lengthOf(expected_result.length);
}
