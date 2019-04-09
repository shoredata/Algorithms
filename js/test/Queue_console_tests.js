let Queue = require('./../Queue');

var q1 = new Queue.QueueList();
console.log();
console.log("adding 1, 2, 3 to empty queue q1 via enqueue():");
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
console.log("q1: ", q1.toString());

console.log("q1 isEMpty(): ", q1.isEmpty());

console.log("q1.length()): ", q1.length());

console.log("q1 next value (q1.peek()): ", q1.peek());

console.log("q1.length(): ", q1.length());

console.log("q1.dequeue(): ", q1.dequeue());

console.log("q1.length(), q1.toString(): ", q1.length(), q1.toString());

console.log("dequeue() until list is empty:");
let count = 0;
while(q1.dequeue()) {
  count++
}
console.log("q1 dequeued " + count + " values");
console.log("q1.length(), q1.toString(): ", q1.length(), q1.toString());
console.log();

