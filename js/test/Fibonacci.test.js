import * as fib from '../Integers/Fibonacci';

describe('fibonacci()', () => {

  it('fibonacci of negative number should be zero', () => {
    expect(fib.fibonacci(-1)).toEqual(0);
  });
  it('fibonacci of zero should be zero', () => {
    expect(fib.fibonacci(0)).toEqual(0);
  });
  it('fibonacci of two should be 1', () => {
    expect(fib.fibonacci(2)).toEqual(1);
  });
  it('fibonacci of positive int > 2 should be sum of n-1 + n-2', () => {
    expect(fib.fibonacci(10)).toEqual(55);
  });
});
