var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('test if the output of 5! is equal to 120', () => {
      const inputNumber = 5;
      const expectedResult = 120;
      const result = Calculate.factorial(inputNumber);

      assert.strictEqual(result, expectedResult);
    });

    it('test if the output of 3! is equal to 6', () => {
      const inputNumber = 3;
      const expectedResult = 6;
      const result = Calculate.factorial(inputNumber);

      assert.strictEqual(result, expectedResult);
    });

    it('covers the 0!', () => {
      const inputNumber = 0;
      const expectedResult = 1;
      const result = Calculate.factorial(inputNumber);

      assert.strictEqual(result, expectedResult);
    })
  });
});