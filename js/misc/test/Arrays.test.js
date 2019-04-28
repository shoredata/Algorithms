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


describe('pushFront()', () => {
  it('should push item to front of array', () => {
    expect(ar.pushFront([], 4)).toEqual([4]);
  });
  it('should push item to front of array', () => {
    expect(ar.pushFront([1], 4)).toEqual([4,1]);
  });
});


describe('insertItemInArrayAtPosition()', () => {
  it('should push item into array at position', () => {
    expect(ar.insertItemInArrayAtPosition([], 0, 1)).toEqual([1]);
  });
  it('should push item into array at position', () => {
    expect(ar.insertItemInArrayAtPosition([1], 1, 2)).toEqual([1,2]);
  });
  it('should push item into array at position', () => {
    expect(ar.insertItemInArrayAtPosition([1], 0, 0)).toEqual([0,1]);
  });
  it('should push item into array at position', () => {
    expect(ar.insertItemInArrayAtPosition([1,2,3], 3, 4)).toEqual([1,2,3,4]);
  });
});
