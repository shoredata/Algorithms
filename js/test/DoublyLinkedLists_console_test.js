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
// expect(node.toString(toStringCallback)).toBe('value: 1, key: test');
console.log(node.toString(toStringCallback));


// describe('DoublyLinkedListNode', () => {
  // it('should create list node with value', () => {
  //   const node = new DoublyLinkedList.DoublyLinkedListNode(1);

  //   expect(node.value).toBe(1);
  //   expect(node.next).toBeNull();
  //   expect(node.previous).toBeNull();
  // });

  // it('should create list node with object as a value', () => {
  //   const nodeValue = { value: 1, key: 'test' };
  //   const node = new DoublyLinkedListNode(nodeValue);

  //   expect(node.value.value).toBe(1);
  //   expect(node.value.key).toBe('test');
  //   expect(node.next).toBeNull();
  //   expect(node.previous).toBeNull();
  // });

  // it('should link nodes together', () => {
  //   const node2 = new DoublyLinkedListNode(2);
  //   const node1 = new DoublyLinkedListNode(1, node2);
  //   const node3 = new DoublyLinkedListNode(10, node1, node2);

  //   expect(node1.next).toBeDefined();
  //   expect(node1.previous).toBeNull();
  //   expect(node2.next).toBeNull();
  //   expect(node2.previous).toBeNull();
  //   expect(node3.next).toBeDefined();
  //   expect(node3.previous).toBeDefined();
  //   expect(node1.value).toBe(1);
  //   expect(node1.next.value).toBe(2);
  //   expect(node3.next.value).toBe(1);
  //   expect(node3.previous.value).toBe(2);
  // });

  // it('should convert node to string', () => {
  //   const node = new DoublyLinkedListNode(1);

  //   expect(node.toString()).toBe('1');

  //   node.value = 'string value';
  //   expect(node.toString()).toBe('string value');
  // });

//   it('should convert node to string with custom stringifier', () => {
//     const nodeValue = { value: 1, key: 'test' };
//     const node = new DoublyLinkedListNode(nodeValue);
//     const toStringCallback = value => `value: ${value.value}, key: ${value.key}`;

//     expect(node.toString(toStringCallback)).toBe('value: 1, key: test');
//   });
// });






