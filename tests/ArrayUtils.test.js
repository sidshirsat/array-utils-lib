// test/ArrayUtils.test.js
const ArrayUtils = require('../src/ArrayUtils');

test('chunk splits array into chunks', () => {
  expect(ArrayUtils.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});

test('compact removes falsy values', () => {
  expect(ArrayUtils.compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
});
