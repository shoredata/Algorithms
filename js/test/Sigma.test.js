import * as sigma from '../Sigma';

describe('sigma', () => {

  it('sigma of negative number should be undefined', () => {
    expect(sigma.sigma(-1)).toEqual(undefined); 
  });

  it('sigma of 0 should be 0', () => {
    expect(sigma.sigma(0)).toEqual(0); 
  });

  it('sigma of non-integer should be undefined', () => {
    expect(sigma.sigma(-1.05)).toEqual(undefined); 
    expect(sigma.sigma(9.9004)).toEqual(undefined); 
  });

  it('sigma of positive integers should be valid', () => {
    expect(sigma.sigma(1)).toEqual(1); 
    expect(sigma.sigma(6)).toEqual(21); 
    expect(sigma.sigma(10)).toEqual(55); 
  });

});