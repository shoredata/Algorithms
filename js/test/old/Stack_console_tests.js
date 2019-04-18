let Stack = require('./../Stack');

var s1 = new Stack.Stack();
console.log();
console.log("adding 101, 102, 103 to empty Stack s1 via push():");
s1.push(101);
s1.push(102);
s1.push(103);
console.log("s1: ", s1.toString());

console.log("s1 isEMpty(): ", s1.isEmpty());

console.log("s1 next value (s1.peek()): ", s1.peek());

console.log("s1.pop(): ", s1.pop());

console.log("s1.toString(): ", s1.toString());

console.log("pop() until list is empty:");
let count = 0;
while(!s1.isEmpty()) {
  console.log("#" + ++count, s1.pop());
}
console.log("s1 popd " + count + " values");
console.log();

