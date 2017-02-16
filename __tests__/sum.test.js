const sum = require('../src/Sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('Two plus two is four', () => {
    expect(2 + 2).toBe(4);
})

test('Two is greater than one', () => {
    expect(2).toBeGreaterThan(1);
})