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




