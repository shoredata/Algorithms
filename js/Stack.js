let LinkedList = require('./LinkedList');

class Stack {
  constructor() {
    // We're going to implement Stack based on LinkedList since these
    // structures are quite similar. Compare push/pop operations of the Stack
    // with prepend/deleteHead operations of LinkedList.
    this.LinkedList = new LinkedList.LinkedList();
  }
}

Stack.prototype.isEmpty = function() {
  return !this.LinkedList.head;
}

Stack.prototype.peek = function() {
  if (!this.LinkedList.head.value) {
    return null;
  }
  return this.LinkedList.head.value;
}

Stack.prototype.push = function(value) {
  this.LinkedList.append(value);
}

Stack.prototype.pop = function() {
  const removedHead = this.LinkedList.deleteHead();
  return removedHead ? removedHead.value : null;
}

Stack.prototype.toString = function(callback) {
  return this.LinkedList.toString(callback);
}

Stack.prototype.toArray = function(callback) {
  return this.LinkedList.toArray(callback);
}



if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
  module.exports.Stack = Stack;

  console.log(module.filename);
  console.log(module.id);
  console.log(module.exports);
}

