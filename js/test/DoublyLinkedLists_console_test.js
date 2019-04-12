//import DoublyLinkedListNode from '../DoublyLinkedListNode';

let DoublyLinkedList = require('./../DoublyLinkedList');
let Comparator = require('./../Comparator');

var l1 = new DoublyLinkedList.DoublyLinkedList();
l1.append(1)
l1.append(2)
console.log(l1);

let node = new DoublyLinkedList.DoublyLinkedListNode(1);
console.log(node);

let nodeValue = { value: 1, key: 'test' };
node = new DoublyLinkedList.DoublyLinkedListNode(nodeValue);
console.log(node);

let node2 = new DoublyLinkedList.DoublyLinkedListNode(2);
let node1 = new DoublyLinkedList.DoublyLinkedListNode(1, node2);
let node3 = new DoublyLinkedList.DoublyLinkedListNode(10, node1, node2);
console.log(node2);
console.log(node1);
console.log(node3);

node = new DoublyLinkedList.DoublyLinkedListNode(1);
console.log(node);

node.value = 'string value';
console.log(node);

nodeValue = { value: 1, key: 'test' };
node = new DoublyLinkedList.DoublyLinkedListNode(nodeValue);
let toStringCallback = value => `value: ${value.value}, key: ${value.key}`;
console.log(node.toString(toStringCallback));



linkedList = new DoublyLinkedList.DoublyLinkedList();

linkedList.append(1);
linkedList.append(2);
console.log(linkedList.head.next.valu);
console.log(linkedList.tail.previous.value);
console.log(linkedList.toString());

linkedList = new DoublyLinkedList.DoublyLinkedList();

console.log(linkedList.head);
console.log(linkedList.tail);

linkedList.append(1);
linkedList.prepend(3);

// console.log(linkedList.head.next.next.previous);
console.log(linkedList.tail.previous.next);
console.log(linkedList.tail.previous.value);
console.log(linkedList.toString());


linkedList = new DoublyLinkedList.DoublyLinkedList();
linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);
console.log(linkedList.toString());


linkedList = new DoublyLinkedList.DoublyLinkedList();

console.log(linkedList.delete(5));

linkedList.append(1);
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(3);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log(linkedList.head.toString());
console.log(linkedList.tail.toString());

let deletedNode = linkedList.delete(3);
console.log(deletedNode.value);
console.log(linkedList.tail.previous.previous.value);
console.log(linkedList.toString());

linkedList.delete(3);
console.log(linkedList.toString());

linkedList.delete(1);
console.log(linkedList.toString());

console.log(linkedList.head.toString());
console.log(linkedList.head.next.next);
console.log(linkedList.tail.previous.previous);
console.log(linkedList.tail.toString());

linkedList.delete(5);
console.log(linkedList.toString());

console.log(linkedList.head.toString());
console.log(linkedList.tail.toString());

linkedList.delete(4);
console.log(linkedList.toString());

console.log(linkedList.head.toString());
console.log(linkedList.tail.toString());
console.log(linkedList.head);

linkedList.delete(2);
console.log(linkedList.toString());

  


linkedList = new DoublyLinkedList.DoublyLinkedList();

console.log(linkedList.deleteTail());

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log(linkedList.head.toString());
console.log(linkedList.tail.toString());

let deletedNode1 = linkedList.deleteTail();

console.log(deletedNode1.value);
console.log(linkedList.toString());
console.log(linkedList.head.toString());
console.log(linkedList.tail.toString());

let deletedNode2 = linkedList.deleteTail();

console.log(deletedNode2.value);
console.log(linkedList.toString());
console.log(linkedList.head.toString());
console.log(linkedList.tail.toString());

let deletedNode3 = linkedList.deleteTail();

console.log(deletedNode3.value);
console.log(linkedList.toString());
console.log(linkedList.head);
console.log(linkedList.tail);



linkedList = new DoublyLinkedList.DoublyLinkedList();

console.log(linkedList.deleteHead());

linkedList.append(1);
linkedList.append(2);

console.log(linkedList.head.toString());
console.log(linkedList.tail.toString());

deletedNode1 = linkedList.deleteHead();

console.log(deletedNode1.value);
console.log(linkedList.head.previous);
console.log(linkedList.toString());
console.log(linkedList.head.toString());
console.log(linkedList.tail.toString());

deletedNode2 = linkedList.deleteHead();

console.log(deletedNode2.value);
console.log(linkedList.toString());
console.log(linkedList.head);
console.log(linkedList.tail);





linkedList = new DoublyLinkedList.DoublyLinkedList();

const nodeValue1 = { value: 1, key: 'key1' };
const nodeValue2 = { value: 2, key: 'key2' };

linkedList
  .append(nodeValue1)
  .prepend(nodeValue2);

var nodeStringifier = value => `${value.key}:${value.value}`;

console.log(linkedList.toString(nodeStringifier));




linkedList = new DoublyLinkedList.DoublyLinkedList();

console.log(linkedList.find({ value: 5 }));

linkedList.append(1);
console.log(linkedList.find({ value: 1 }));

linkedList
  .append(2)
  .append(3);

node = linkedList.find({ value: 2 });

console.log(node.value);
console.log(linkedList.find({ value: 5 }));




linkedList = new DoublyLinkedList.DoublyLinkedList();

linkedList
  .append({ value: 1, key: 'test1' })
  .append({ value: 2, key: 'test2' })
  .append({ value: 3, key: 'test3' });

node = linkedList.find({ callback: value => value.key === 'test2' });

console.log(node);
console.log(node.value.value);
console.log(node.value.key);
console.log(linkedList.find({ callback: value => value.key === 'test5' }));




const comparatorFunction = (a, b) => {
  if (a.customValue === b.customValue) {
    return 0;
  }

  return a.customValue < b.customValue ? -1 : 1;
};

linkedList = new DoublyLinkedList.DoublyLinkedList(comparatorFunction);

linkedList
  .append({ value: 1, customValue: 'test1' })
  .append({ value: 2, customValue: 'test2' })
  .append({ value: 3, customValue: 'test3' });

node = linkedList.find({
  value: { value: 2, customValue: 'test2' },
});

console.log(node);
console.log(node.value.value);
console.log(node.value.customValue);
console.log(linkedList.find({ value: 2, customValue: 'test5' }));





linkedList = new DoublyLinkedList.DoublyLinkedList();

// Add test values to linked list.
linkedList
  .append(1)
  .append(2)
  .append(3)
  .append(4);

console.log(linkedList.toString());
console.log(linkedList.head.value);
console.log(linkedList.tail.value);

// Reverse linked list.
linkedList.reverse();

console.log(linkedList.toString());

console.log(linkedList.head.previous);
console.log(linkedList.head.value);
console.log(linkedList.head.next.value);
console.log(linkedList.head.next.next.value);
console.log(linkedList.head.next.next.next.value);

console.log(linkedList.tail.next);
console.log(linkedList.tail.value);
console.log(linkedList.tail.previous.value);
console.log(linkedList.tail.previous.previous.value);
console.log(linkedList.tail.previous.previous.previous.value);

// Reverse linked list back to initial state.
linkedList.reverse();

console.log(linkedList.toString());

console.log(linkedList.head.previous);
console.log(linkedList.head.value);
console.log(linkedList.head.next.value);
console.log(linkedList.head.next.next.value);
console.log(linkedList.head.next.next.next.value);

console.log(linkedList.tail.next);
console.log(linkedList.tail.value);
console.log(linkedList.tail.previous.value);
console.log(linkedList.tail.previous.previous.value);
console.log(linkedList.tail.previous.previous.previous.value);






