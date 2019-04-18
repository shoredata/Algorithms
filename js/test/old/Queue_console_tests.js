let Queue = require('./../Queue');

var q1 = new Queue.QueueList();
console.log();
console.log("adding 101, 102, 103 to empty queue q1 via enqueue():");
q1.enqueue(101);
q1.enqueue(102);
q1.enqueue(103);
console.log("q1: ", q1.toString());

console.log("q1 isEMpty(): ", q1.isEmpty());

console.log("q1 next value (q1.peek()): ", q1.peek());

console.log("q1.dequeue(): ", q1.dequeue());

console.log("q1.toString(): ", q1.toString());

console.log("dequeue() until list is empty:");
let count = 0;
while(!q1.isEmpty()) {
  console.log("#" + ++count, q1.dequeue());
}
console.log("q1 dequeued " + count + " values");
console.log();

