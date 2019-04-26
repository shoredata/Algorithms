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


describe('removeDuplicatesFromArray()', () => {
  it('should return empty array for an empty array', () => {
    expect(ar.removeDuplicatesFromArray([])).toEqual([]);
  });
  it('should return array without duplicates', () => {
    expect(ar.removeDuplicatesFromArray([1,2,1,3])).toEqual([1,2,3]);
    expect(ar.removeDuplicatesFromArray([-1,-2,-3])).toEqual([-1,-2,-3]);
  });
});

