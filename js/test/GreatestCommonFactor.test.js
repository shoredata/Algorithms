import greatestCommonFactor from '../greatestCommonFactor';

describe('greatestCommonFactor', () => {
  it('should return greatest common factor for both numbers', () => {
    expect(greatestCommonFactor(5, 80)).toEqual(5);
    expect(greatestCommonFactor(3, 17)).toEqual(1);
  });
});
