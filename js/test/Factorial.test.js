import * as fact from '../Factorial';

describe('factorial', () => {

  it('factorial of negative number should be undefined', () => {
    expect(fact.factorial(-1)).toEqual(undefined); //use toEqual(), not toBe() since not comapring objects
  });

  it('factorial of 0 or 1 should be 1', () => {
    expect(fact.factorial(0)).toEqual(1); //use toEqual(), not toBe() since not comapring objects
    expect(fact.factorial(1)).toEqual(1); //use toEqual(), not toBe() since not comapring objects
  });

  it('factorial of non-integer should be undefined', () => {
    expect(fact.factorial(-1.05)).toEqual(undefined); //use toEqual(), not toBe() since not comapring objects
    expect(fact.factorial(9.9004)).toEqual(undefined); //use toEqual(), not toBe() since not comapring objects
  });

  it('factorial of positive integers should be valid', () => {
    expect(fact.factorial(6)).toEqual(720); //use toEqual(), not toBe() since not comapring objects
    expect(fact.factorial(10)).toEqual(3628800); //use toEqual(), not toBe() since not comapring objects
  });

});
