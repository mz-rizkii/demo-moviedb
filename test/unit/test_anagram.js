const { expect } = require('chai')

const { groupAnagramWords } = require('../../lib/handlers/anagram')

/**
 * test for processing anagram array 
 * submission for 4. Logic Test 
 */
it('Inspect anagram handler', testAnagramHandler);

function testAnagramHandler() {
    const input = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

    const result = groupAnagramWords(input);

    const expected_result = [
        ["kita", "atik", "tika"],
        ["aku", "kua"],
        ["makan"],
        ["kia"]
    ]

    expect(result, 'the result should have number of group as expected result').to.have.lengthOf(expected_result.length);
}
