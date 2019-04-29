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


describe('popFront()', () => {
  it('should pop item from front of array', () => {
    expect(ar.popFront([1])).toEqual(1);
  });
  it('should return undefined for empty array', () => {
    expect(ar.popFront([])).toEqual(undefined);
  });
  it('should pop single item from front of array and return empty array', () => {
    let arr = [1];
    let retn = ar.popFront(arr);
    expect(retn).toEqual(1);
    expect(arr).toEqual([]);
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


describe('getArrayMin()', () => {
  it('should return undefined for empty array', () => {
    expect(ar.getArrayMin([])).toEqual(undefined);
  });
  it('should return smallest value in array', () => {
    expect(ar.getArrayMin([1])).toEqual(1);
  });
  it('should return smallest value in array', () => {
    expect(ar.getArrayMin([1,2,3,4,5])).toEqual(1);
  });
});
describe('getArrayMax()', () => {
  it('should return undefined for empty array', () => {
    expect(ar.getArrayMax([])).toEqual(undefined);
  });
  it('should return largest value in array', () => {
    expect(ar.getArrayMax([1])).toEqual(1);
  });
  it('should return largest value in array', () => {
    expect(ar.getArrayMax([1,2,3,4,5])).toEqual(5);
  });
});
describe('getArraySum()', () => {
  it('should return undefined for empty array', () => {
    expect(ar.getArraySum([])).toEqual(undefined);
  });
  it('should return sum of items in array', () => {
    expect(ar.getArraySum([1])).toEqual(1);
  });
  it('should return sum of items in array', () => {
    expect(ar.getArraySum([1,2,3,4,5])).toEqual(15);
  });
});
describe('getArrayAverage()', () => {
  it('should return undefined for empty array', () => {
    expect(ar.getArrayAverage([])).toEqual(undefined);
  });
  it('should return avg of items in array', () => {
    expect(ar.getArrayAverage([1])).toEqual(1);
  });
  it('should return avg of items in array', () => {
    expect(ar.getArrayAverage([1,2,3,4,5])).toEqual(3);
  });
});


describe('zipArrays()', () => {
  it('should return two arrays zipped', () => {
    let testa = ['fruit', 'veg', 'meat'];
    let testb = ['apple', 'tomato', 'beef'];
    let testc = ar.zipArrays(testa,testb);
    expect(testc).toEqual({"fruit": "apple", "meat": "beef", "veg": "tomato"});
  });
});


describe('countGreater()', () => {
  it('should return number if items in array greater than value', () => {
    expect(ar.countGreater([1,2,3,4,5],3)).toEqual(2);
  });
});


describe('replaceNegatives()', () => {
  it('should replace all negative values in array with a 0', () => {
    expect(ar.replaceNegatives([1,2,-3,-5,5])).toEqual([1,2,0,0,5]);
  });
});


describe('removeArrayItemsInPlace()', () => {
  it('emoty array should result in empty array', () => {
    expect(ar.removeArrayItemsInPlace([],0,0)).toEqual([]);
  });
  it('should pop single item from front of array and result in empty array', () => {
    let arr = [1];
    ar.removeArrayItemsInPlace(arr,0,0);
    expect(arr).toEqual([]);
  });
});
