const { getUserChoice } = require("./rps.js");

test('Make sure user choice is rock, paper, or scissors', () =>
{
    const fnResult = getUserChoice('rock, paper, scissors');
    const expectedResult = 'rock, paper, scissors';
    expect(fnResult).toBe(expectedResult);
});