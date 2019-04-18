let LinkedList = require('./../LinkedList');

var list1 = new LinkedList.LinkedList();
list1.append(1)
list1.append(2)

list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();

list1.append(3)
list1.append(4)
list1.prepend(-1)
list1.prepend(0)
console.log("Appends & Prepends:");
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();

console.log("DeleteHead:");
console.log(list1.deleteHead());
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();

console.log("DeleteTail:");
console.log(list1.deleteTail());
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();

list1.insertBefore(0,1)
console.log("insertBefore(0,1):");
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();


list1.insertBefore(-9,-8)
console.log("insertBefore(-9,-8):");
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();

list1.insertBefore(-10,-9)
console.log("insertBefore(-10,-9):");
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();

list1.delete(19)
list1.delete(0)
list1.delete(-1)
console.log("deletes:");
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();

console.log("contains(-1):", list1.contains(-1));
console.log("contains(1):", list1.contains(1));
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();

list1.display();
console.log("length, min, max, sum, average");
console.log(list1.length, list1.min(), list1.max(), list1.sum(), list1.average());
console.log();

list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();


// var list1 = new LinkedList.LinkedList();
var list2 = new LinkedList.LinkedList();

list1.append(14);
list2.append(21);
list2.append(22);
list2.append(23);
list2.append(24);
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();

list2.display();
console.log("head2:", list2.head.value);
console.log("tail2:", list2.tail.value);
console.log();

list1.zipinorder(list2);
console.log("list1.zipinorder(list2):");
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();
list2.display();
console.log();

list2.append(31);
list2.append(32);
list2.append(33);
list2.append(34);
list2.append(41);
list2.append(51);
list2.append(52);
list2.append(61);
list2.append(62);
list1.display();
list2.display();
list1.zipinorder(list2);
console.log("list1.zipinorder(list2):");
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();
list2.display();
console.log();


console.log("list1.reverse:");
list1.reverse();
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();

console.log("list1.swap(34,62)");
list1.swap(34,62);
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();

console.log("list1.swap(31,51)");
list1.swap(31,51);
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();

console.log("list1.mintofront()");
list1.mintofront();
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();

console.log("list1.maxtoend()");
list1.maxtoend();
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();

console.log("list1.find(61):", list1.find(61));
console.log();

console.log("list1.findprev(61):", list1.findprev(61));
console.log();

console.log("list1.findprev(-19):", list1.findprev(-19));
console.log();

console.log("tostring:", list1.toString());
console.log();

console.log("toarray:", list1.toArray());
console.log();

console.log("fromarray(33,32):", list1.fromArray([33,32]));
list1.display();
console.log("head:", list1.head.value);
console.log("tail:", list1.tail.value);
console.log();

console.log("display: ");
list1.display();
console.log("displayReverse:");
list1.displayReverse();
console.log();

console.log("traverse:");
const iterator = list1.traverse();
var output = iterator.next().value;
while(output) { 
  console.log(output); 
  output = iterator.next().value;
}
console.log();

console.log("traverseReverse:");
const iteratorrev = list1.traverseReverse();
var output = iteratorrev.next().value;
while(output) { 
  console.log(output); 
  output = iteratorrev.next().value;
}
console.log();


