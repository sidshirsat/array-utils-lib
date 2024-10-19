const ArrayUtils = require('../src/ArrayUtils');
const { expect } = require('chai');

describe('ArrayUtils', () => {
  it('should split array into chunks', () => {
    expect(ArrayUtils.chunk([1, 2, 3, 4, 5], 2)).to.deep.equal([[1, 2], [3, 4], [5]]);
  });

  it('should remove falsy values', () => {
    expect(ArrayUtils.compact([0, 1, false, 2, '', 3])).to.deep.equal([1, 2, 3]);
  });
});
