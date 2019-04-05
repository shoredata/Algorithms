let slists = require('./slists');

var list1 = new slists.LinkedList();
list1.append(1)
list1.append(2)
list1.append(3)
list1.append(4)
list1.prepend(-1)
list1.prepend(0)
list1.deleteHead()
list1.insertBefore(0,1)
list1.insertBefore(-9,-8)
list1.insertBefore(-10,-9)
list1.delete(19)
list1.delete(0)
list1.delete(-1)
list1.delete(2)
list1.delete(-10)
list1.delete(-9)
list1.delete(-9)
list1.contains(-1)
list1.contains(1)

list1.length()
list1.min()
list1.max()
list1.sum()
list1.average()

console.log(list1.head.value);
console.log(list1.tail.value);

var list1 = new slists.LinkedList();
var list2 = new slists.LinkedList();

list1.append(14);
list2.append(21);
list2.append(22);
list2.append(23);
list2.append(24);
list1.zipinorder(list2);


var list3 = new slists.LinkedList()
var list4 = new slists.LinkedList();

list3.append(31);
list3.append(32);
list3.append(33);
list3.append(34);
list4.append(41);
list3.zipinorder(list4);

var list5 = new slists.LinkedList()
var list6 = new slists.LinkedList();

list5.append(51);
list5.append(52);
list6.append(61);
list6.append(62);
list5.zipinorder(list6);

list1.reverse();
list3.reverse();
list5.reverse();




console.log();
list5.swap(52,51);

console.log();
list5.swap(52,51);

console.log();
list3.display();
list3.append(-19);
list3.append(38);
list3.mintofront();

console.log();
list3.display();
list3.prepend(100);
list3.maxtoend();

console.log();
list3.findprev(100);
list3.findprev(-19);

console.log();
console.log("Forward: ");
list3.display();
console.log("Reverse");
list3.displayReverse();



console.log();
const iterator = list3.traverse();
var output = iterator.next().value;
while(output) { 
  console.log(output); 
  output = iterator.next().value;
}

console.log();
const iteratorrev = list3.traverseReverse();
var output = iteratorrev.next().value;
while(output) { 
  console.log(output); 
  output = iteratorrev.next().value;
}
console.log();
