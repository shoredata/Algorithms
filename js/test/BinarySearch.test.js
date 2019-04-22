import * as bs from '../BinarySearch';

describe('binarySearchFound()', () => {
  it('should return true if target found in array', () => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arr2 = [1, 2, 3, 4.5, 5, 6, 7, 8, 9];
    expect(bs.binarySearchFound(arr1,4)).toEqual(true);
    expect(bs.binarySearchFound(arr1,4.5)).toEqual(false);
    expect(bs.binarySearchFound(arr2,4.5)).toEqual(true);
  });
});


describe('binarySearch compareNumbers()', () => {
  it('should return a negative number if a is less than b', () => {
    expect(bs.compareNumbers(-1,1)).toBeLessThan(0);
    expect(bs.compareNumbers(0,1)).toBeLessThan(0);
    expect(bs.compareNumbers(-0.000001,0.000001)).toBeLessThan(0);
  });
  it('should return 0 if a is equal to b', () => {
    expect(bs.compareNumbers(-1,-1)).toBe(0);
    expect(bs.compareNumbers(0,0)).toBe(0);
    expect(bs.compareNumbers(0.000001,0.000001)).toBe(0);
  });
  it('should return a positive number of a is greater than b', () => {
    expect(bs.compareNumbers(1,-1)).toBeGreaterThan(0);
    expect(bs.compareNumbers(1,0)).toBeGreaterThan(0);
    expect(bs.compareNumbers(0.000001,-0.000001)).toBeGreaterThan(0);
  });
});

describe('random testing of binarySearchInsertionPoint() via randomTestBinarySearch()', () => {
  it('should return 0 fails', () => {
    expect(bs.randomTestBinarySearch()).toBe(0);
  });
});

