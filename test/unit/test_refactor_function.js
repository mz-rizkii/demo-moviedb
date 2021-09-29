const { expect } = require('chai');

const { findFirstStringInBracket, findFirstStringInBracketOld } = require('../../lib/handlers/refactor');

it('check bracket pairing', checkBracketPairing);

function checkBracketPairing() {
    const demo_input = "(TnT)";

    const expected_result = 'TnT';

    const result = findFirstStringInBracket(demo_input);

    expect(result, 'the result should be string inside bracket').to.equal(expected_result)

    const old_result = findFirstStringInBracketOld(demo_input);

    expect(result, 'the result should be string inside bracket').to.equal(expected_result);

    expect(result, 'the result from both function should be same').to.equal(old_result);
}