import sumOfSquares from '../Statistics/SumOfSquares';

describe('sumOfSquares', () => {
  it('should return sum of squares of array', () => {

    expect(sumOfSquares([])).toEqual(0);
    expect(sumOfSquares([1,2,3,4,5])).toEqual(55);

  });
});
