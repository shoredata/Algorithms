import floodFill from '../FloodFill';

describe('FloodFill', () => {
  it('should do nothing to empty array', () => {
    const array1 = [ [] ];
    let array2 = floodFill(array1, 1, 1, 3, 1);
    expect(array2).toEqual(array1); //use toEqual(), not toBe() since not comapring objects
  });

  it('should do nothing to 1-dimensional array', () => {
    const array1 = [ [1] ];
    let array2 = floodFill(array1, 0, 0, 1, 2);
    expect(array2).toEqual(array1);
  });

  it('should work on minimal 2-d array', () => {
    const array1 = [ [1], [2] ];
    const array2 = [ [2], [2] ];
    let array3 = floodFill(array1, 0, 0, 1, 2);
    expect(array3).toEqual(array2);
  });

  it('should work on larger 5x5 array', () => {
    const array1 = [  [3,2,3,4,3],
                      [2,3,3,4,0],
                      [7,3,3,5,3],
                      [6,5,3,4,1],
                      [1,2,3,3,3] ];

    const array2 = [  [3,2,1,4,3],
                      [2,1,1,4,0],
                      [7,1,1,5,3],
                      [6,5,1,4,1],
                      [1,2,1,1,1] ];

    let array3 = floodFill(array1, 2, 2, 3, 1);
    expect(array3).toEqual(array2);
  });



});
