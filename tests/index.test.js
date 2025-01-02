const { add } = require('../../src/index');  // Example function to test

describe('Addition Function', () => {
  test('adds two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });
});
