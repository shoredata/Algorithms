import * as xxx from '../Sigma';

describe('sigma()', () => {

  it('sigma of negative number should be undefined', () => {
    expect(xxx.sigma(-1)).toEqual(undefined); 
  });

  it('sigma of 0 or 1 should be iteself', () => {
    expect(xxx.sigma(0)).toEqual(0); 
    expect(xxx.sigma(1)).toEqual(1); 
  });

  it('sigma of non-integer should be undefined', () => {
    expect(xxx.sigma(-1.05)).toEqual(undefined); 
    expect(xxx.sigma(9.9004)).toEqual(undefined); 
  });

  it('sigma of positive integers should be valid', () => {
    expect(xxx.sigma(6)).toEqual(21); 
    expect(xxx.sigma(10)).toEqual(55); 
  });

});