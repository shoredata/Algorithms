// import LinkedList from 'LinkedList';
// the QueueList is a LinkedList as the two data structures are similar
let LinkedList = require('./LinkedList');

class QueueList {
  constructor() {
    this.LinkedList = new LinkedList.LinkedList();
  }
};

/**
 * @return: boolean
 */
QueueList.prototype.isEmpty = function() {
  return !this.LinkedList.head;
}

/**
 * Add element at end of queue (tail of LL)
 */
QueueList.prototype.enqueue = function(value) {
  this.LinkedList.append(value);
}


/**
 * @return: value of head element in LL
 */
QueueList.prototype.peek = function() {
  if (!this.LinkedList.head.value) {
    return null;
  }
  return this.LinkedList.head.value;
}

/**
 * @return: {head.value : null}
 */
QueueList.prototype.dequeue = function() {
  const removedHead = this.LinkedList.deleteHead();
  return removedHead ? removedHead.value : null;
}

/**
 * @param: [callback]
 * @return: {str}
 */
QueueList.prototype.toString = function(callback) {
  return this.LinkedList.toString(callback);
}

/**
 * @return: {length}
 */
QueueList.prototype.length = function() {
  if (!this.LinkedList.head) {
    return 0;
  }
  return this.LinkedList.length();
}


if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
    module.exports.QueueList = QueueList;

    console.log(module.filename);
    console.log(module.id);
    console.log(module.exports);
}

