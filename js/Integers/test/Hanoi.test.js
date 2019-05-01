import * as han from '../Hanoi';

describe('hanoi()', () => {

  it('hanoi of 10 discs on 3 towers', () => {
    var ar1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], ar2=[], ar3=[];
    // console.log(ar1, ar2, ar3);
    han.hanoi(10, ar1, ar2, ar3);
    // console.log(ar1, ar2, ar3);
    expect(ar1).toEqual([]);
    expect(ar2).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(ar3).toEqual([]);
  });


});
