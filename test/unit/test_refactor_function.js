const { expect } = require('chai');

const { findFirstStringInBracket, findFirstStringInBracketOld } = require('../../lib/handlers/refactor');

it('check bracket pairing', checkBracketPairing);

/**
 * Test refactor function ensure refactor function produce same result as the old one
 * old version of findFirstStringInBracket renamed to findFirstStringInBracketOld
 */
function checkBracketPairing() {
    const demo_inputs = [
        ["(TnT)", 'TnT'], ["kunci()", ''], ["Internet of things(IoT)", 'IoT'],
        ["Bantuan", ''], ['<):I:(>', '']
    ];

    for (const [demo_input, expected_result] of demo_inputs) {
        const result = findFirstStringInBracket(demo_input);

        expect(result, 'the result should be string inside bracket').to.equal(expected_result)

        const old_result = findFirstStringInBracketOld(demo_input);

        expect(result, 'the result should be string inside bracket').to.equal(expected_result);

        expect(result, 'the result from both function should be same').to.equal(old_result);
    }
}