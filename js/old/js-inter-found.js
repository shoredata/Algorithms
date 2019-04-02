Intermediate Foundation

Part 1
Sigma - Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).
Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function Sigma(value) {
  if (value==0) { return 0; }
  else { return value + Sigma(value-1);}
}
console.log(Sigma(3));
console.log(Sigma(5));
console.log(Sigma(10));
6
15
55

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

Fibonacci - Create a function to generate Fibonacci numbers.
In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.
Your function should accept one argument, an index into the sequence
(where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).
Examples:
  fibonacci(0) = 0 (given),
  fibonacci(1) = 1 (given),
  fibonacci(2) = 1 (fib(0)+fib(1), or 0+1),
  fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1),
  fibonacci(4) = 3 (1+2),
  fibonacci(5) = 5 (2+3),
  fibonacci(6) = 8 (3+5),
  fibonacci(7) = 13 (5+8).
Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
function Fibonacci(index) {
  if (index<1) { return 0; }
  if (index<=1) { return 1; }
  else if (index==2) { return 1; }
  else {
    return Fibonacci(index-1) + Fibonacci(index-2);
  }
}
console.log(Fibonacci(0));
console.log(Fibonacci(1));
console.log(Fibonacci(2));
console.log(Fibonacci(3));
console.log(Fibonacci(4));
console.log(Fibonacci(5));
console.log(Fibonacci(6));
console.log(Fibonacci(7));
console.log(Fibonacci(8));
console.log(Fibonacci(10));
0
1
1
2
3
5
8
13
21
55


Array: Second-to-Last: Return the second-to-last element of an array.
Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function arraySTL(arr) {
  if (arr.length<2)
  {
    return null;
  }
  else{
    return arr[arr.length-2];
  }
}
console.log(arraySTL([42, true, 4, "Liam", 7]));
console.log(arraySTL([42]));
Liam
null


Array: Nth-to-Last: Return the element that is N-from-arrays-end.
Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function arrayNFL(arr,n) {
  if (arr.length<n)
  {
    return null;
  }
  else{
    return arr[arr.length-n];
  }
}
console.log(arrayNFL([5,2,3,6,4,9,7],3));
console.log(arrayNFL([42],4));
4
null


Array: Second-Largest: Return the second-largest element of an array.
Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function dosort2nd(arr) {
  if (arr.length<2) { return null; }
  else{
    for (var idx=0; idx<arr.length; idx++) {
      for (var idy=idx; idy<arr.length; idy++) {
        if (arr[idy]<arr[idx]) {
          temp=arr[idx];
          arr[idx]=arr[idy];
          arr[idy]=temp;
        }
      }
    }
    // console.log(arr);
    return arr[arr.length-2];
  }
}
console.log(dosort2nd([40, 100, 1, 5, 25, 10])==40);
console.log(dosort2nd([42,1,4,3.14,7])==7);
console.log(dosort2nd([100])==null);
true
true
true


Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.
Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function DoubleTrouble(arr) {
  var len = arr.length;
  for (var idx=1; idx<=len; idx++) {
    arr.push(0);
  }
  for (var idx=len-1; idx>=0; idx--) {
    arr[(idx*2)+1]=arr[idx];
    arr[(idx*2)]=arr[idx];
  }
  console.log(arr);
  return arr;
}
DoubleTrouble([4, "Ulysses", 42, false]);
DoubleTrouble([99, "bottles", 'of', "beer", null]);
[ 4, 4, 'Ulysses', 'Ulysses', 42, 42, false, false ]
[ 99, 99, 'bottles', 'bottles', 'of', 'of', 'beer', 'beer', null, null ]


Part 2 - introducing recursions!
General Recursion Overview

Fibonacci with recursion

Assignment
Create a function Fib(n) where it returns the nth Fibonacci number.  Use recursion for this.
function Fibonacci(index) {
  if (index<1) { return 0; }
  if (index<=1) { return 1; }
  else if (index==2) { return 1; }
  else {
    return Fibonacci(index-1) + Fibonacci(index-2);
  }
}
console.log(Fibonacci(0));
console.log(Fibonacci(1));
console.log(Fibonacci(2));
console.log(Fibonacci(3));
console.log(Fibonacci(4));
console.log(Fibonacci(5));
console.log(Fibonacci(6));
console.log(Fibonacci(7));
console.log(Fibonacci(8));
console.log(Fibonacci(10));
0
1
1
2
3
5
8
13
21
55

Recursive Fill - please see below.

Assignment Description for Recursive Fill
GitHub link: https://github.com/choi5983/rf

Recursive Fill Solution - please watch after youve spent about 40 minutes trying to do this on your own
done in project ..
