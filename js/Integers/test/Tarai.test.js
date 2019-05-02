import * as tar from '../Tarai';

describe('tarai()', () => {

  it('x<=y => y', () => {
    expect(tar.tarai(10,2,9)).toEqual(9); 
  });

});