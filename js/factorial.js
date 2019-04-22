// Factorial - Write a function factorial(num) that, given a number, returns 
//  the product (multiplication) of all positive integers from 1 up to number 
//  (inclusive).
//
// For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

// The factorial is only defined for non-negative integers.

var f;
export function factorial(n){
  f = [];
  return fact(n);
}
function fact(n) {
  if (n < 0)
    return undefined;
  if (!Number.isInteger(n))
    return undefined;
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = fact(n-1) * n;
}


// console.log("factorial 5: " + factorial(5)); // 120
// console.log("factorial 0: " + factorial(0)); // 1
// console.log("factorial -1: " + factorial(-1)); // 1
// console.log("factorial -1.5: " + factorial(-1.5)); // 1
// console.log("factorial -1.999: " + factorial(-1.999)); // 1
// console.log("factorial 6.5: " + factorial(6.5)); // 720
// console.log("factorial 6.9: " + factorial(6.9)); // 720
// console.log("factorial 6.0: " + factorial(6.0)); // 720
// console.log("factorial 6.0019: " + factorial(6.0019)); // 720

// $ node factorial.js
// factorial 5: 120
// factorial 0: 1
// factorial -1: undefined
// factorial -1.5: undefined
// factorial -1.999: undefined
// factorial 6.5: undefined
// factorial 6.9: undefined
// factorial 6.0: 720
// factorial 6.0019: undefined


export function factorialRecursion(num) {
  if (num < 0) 
    return -1;
  else if (num == 0) 
    return 1;
  else {
    return (num * factorialRecursion(num - 1));
  }
}

export function factorialWhile(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}

export function factorialFor(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

