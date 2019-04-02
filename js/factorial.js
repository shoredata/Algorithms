Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).
For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function Factorial(value) {
  if (value<=1) { return value; }
  else { return value * Factorial(value-1);}
}
console.log(Factorial(3));
console.log(Factorial(5));
console.log(Factorial(10));
6
120
3628800