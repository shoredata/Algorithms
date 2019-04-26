import * as ar from '../Arrays';

describe('getLargestArrayElement()', () => {
  it('should return undefined for an empty array', () => {
    expect(ar.getLargestArrayElement([])).toEqual(undefined);
  });
  it('should return largest element in array', () => {
    expect(ar.getLargestArrayElement([1,2,3])).toEqual(3);
    expect(ar.getLargestArrayElement([-1,-2,-3])).toEqual(-1);
  });
});



