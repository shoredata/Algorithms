// Factorial - Write a function factorial(num) that, given a number, returns 
//  the product (multiplication) of all positive integers from 1 up to number 
//  (inclusive).
//
// For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function Factorial(value) {
  if (value<=1) { return value; }
  else { return value * Factorial(value-1);}
}
console.log(Factorial(3));
console.log(Factorial(5));
console.log(Factorial(10));

const factorial = (x , acum = 1) => Math.floor(parseInt(x))  ? factorial(Math.floor(parseInt(x))  - 1, Math.floor(parseInt(x))  * acum) : acum;
console.log("factorial 5: " + factorial(5)); // 120
console.log("factorial 0: " + factorial(0)); // 1
console.log("factorial 6.5: " + factorial(6.5)); // 720


// Bart@bart-i7-6000k MINGW64 ~/projects/algorithms/js (master)
// $ node factorial.js
// 6
// 120
// 3628800
// factorial 5: 120
// factorial 0: 1
// factorial 6.5: 720

