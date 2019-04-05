class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

//function LinkedList() {
//  this.head = null;
//  this.tail = null;
//};

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
};

LinkedList.prototype.deleteHead = function() {
  if (!this.head) {
    return null;
  }
  const deletedHead = this.head;
  if (this.head.next) {
    this.head = this.head.next;
  } else {
    this.head = null;
    this.tail = null;
  }
  return deletedHead;
};

LinkedList.prototype.deleteTail = function() {
  const deletedTail = this.tail;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    return deletedTail;
  }
  let currentNode = this.head;
  while (currentNode.next) {
    if (!currentNode.next.next) {
      currentNode.next = null;
    } else {
      currentNode = currentNode.next;
    }
  }
  this.tail = currentNode;
  return deletedTail;
};

LinkedList.prototype.prepend = function(value) {
  const node = new LinkedListNode(value, this.head);
  this.head = node;
  if (!this.tail) {
    this.tail = node;
  }
  return this;
};

LinkedList.prototype.append = function(value) {
  const node = new LinkedListNode(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
    return this;
  }
  this.tail.next = node;
  this.tail = node;
  return this;
};

LinkedList.prototype.insertBefore = function(value, before) {
  var node = new LinkedListNode(value);
  if (!this.head){
    this.head = node;
    this.tail = node;
  }
  else if (this.head.value == before){
    node.next = this.head;
    this.head = node;
  }
  else {
    current = this.head;
    while (current.next){
      if (current.next.value == before){
        node.next = current.next;
        current.next = node;
        return this;
      }
      else{
        current = current.next;
      }
    }
    current.next = node;
  }
  return this;
}

LinkedList.prototype.delete = function(value) {
  if (!this.head){
    return null;
  }
  let deletedNode = null;
  while (this.head && this.head.value === value) {
    deletedNode = this.head;
    this.head = this.head.next;
  }
  let currentNode = this.head;
  if (currentNode !== null) {
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
  }
  if (this.tail.value === value) {
    this.tail = currentNode;
  }
  return deletedNode;
}

LinkedList.prototype.contains = function(value) {
  let current = this.head;
  while(current){
    if (current.value==value){
      return true;
    }
    current = current.next;
  }
  return false;
}

LinkedList.prototype.length = function(value) {
  let current = this.head;
  let length = 0;
  while(current){
    length++;
    current = current.next;
  }
  return length;
}

LinkedList.prototype.min = function(value) {
  let min = null;
  if (this.head!=null){
    min = this.head.value;
    var current = this.head;
    while(current){
      if (min > current.value) {
        min = current.value;
      }
      current = current.next;
    }
  }
  return min;
}

LinkedList.prototype.max = function(value) {
  let max = null;
  if (this.head!=null){
    max = this.head.value;
    var current = this.head;
    while(current){
      if (max < current.value) {
        max = current.value;
      }
      current = current.next;
    }
  }
  return max;
}

LinkedList.prototype.sum = function(value) {
  let sum = null;
  if (this.head!=null){
    sum = 0;
    var current = this.head;
    while(current){
      sum += current.value;
      current = current.next;
    }
  }
  return sum;
}

LinkedList.prototype.average = function(value) {
  let avg = null;
  if (this.length()>0){
    avg = this.sum() / this.length();
  }
  return avg;
}

LinkedList.prototype.find = function(value) {
  let current = this.head;
  while(current){
    if (current.value==value){
      return current;
    }
    current = current.next;
  }
  return null;
}

LinkedList.prototype.zipinorder = function(q) {
  this.display();
  q.display();
  // Main function that inserts nodes of linked list q into p at
  // alternate positions. Since head of first list never changes
  // and head of second list/ may change, we need single pointer
  // for first list and double pointer for second list.
  let p_current = this.head;
  let q_current = q.head;

  if (p_current==null) {
    this.head = q.head;
  }
  else{
    while ((p_current != null) && (q_current != null))  {
      let p_next = p_current.next;
      let q_next = q_current.next;
      if (p_next!= null) {
        q_current.next = p_next;      // change next pointer of q_curr
        p_current.next = q_current;   // change next pointer of p_curr
      }
      else{
        p_current.next = q_current;   // change next pointer of p_curr
      }
      p_current = p_next;
      q_current = q_next;
    }
  }
  q.head = null;
  q.display();
  return this;
};

LinkedList.prototype.reverse = function() {
  let current = this.head;
  let next = null;
  let previous = null;
  while(current != null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  this.tail = this.head;
  this.head = previous;
  return this;
}

LinkedList.prototype.display = function() {
  let current = this.head;
  let mylist = [];
  while (current) {
    mylist.push(current.value);
    current = current.next;
  }
  console.log(mylist);
  return this;
};
LinkedList.prototype.displayReverse = function() {
  let current = this.head;
  let mylist = [];
  while (current) {
    mylist.unshift(current.value); //push,pop=END :: unshift,shift=START
    current = current.next;
  }
  console.log(mylist);
  return this;
};

LinkedList.prototype.swap = function(val1, val2) {
  if(this.head == null){
      console.log("Swap Error: Linked list is empty");
      return this;
  }

  var n = this.head;
  var temp = null;
  var node1 = null;
  var node2 = null;

  findNode(n);

  function findNode(n){
      if(n.value == val1){ node1 = n; }
      if(n.value == val2){ node2 = n; }
      //if either of node1, node2 is not set 
      if(!node1 || !node2){
          if(n.next === null){
              console.log("Swap Error: Both nodes not found");
              return;
          }
          findNode(n.next);
      } else {
          if(node1.value == node2.value) return;
          node1.value = node1.value*node2.value;
          node2.value = node1.value/node2.value;
          node1.value = node1.value/node2.value;
          return;
      }
  }
  return this;
};

LinkedList.prototype.mintofront = function() {
    var min = this.min();
    if (min) {
        this.delete(min);
        this.prepend(min);
    }
    return;
}

LinkedList.prototype.maxtoend = function() {
    var max = this.max();
    if (max) {
        this.delete(max);
        this.append(max);
    }
    return;
}

LinkedList.prototype.findprev = function(value) {
  let current = this.head;
  let prev = null;
  while(current){
    if (current.value==value){
      return prev;
    }
    prev = current;
    current = current.next;
  }
  return null;
}

LinkedList.prototype.fromArray = function(values) {
  values.forEach(value => this.append(value));
  return this;
}

LinkedList.prototype.toArray = function() {
  const nodes = [];
  let currentNode = this.head;
  while (currentNode) {
    nodes.push(currentNode);
    currentNode = currentNode.next;
  }
  return nodes;
}

LinkedList.prototype.toString = function(callback) {
  return this.toArray().map(node => node.toString(callback)).toString();
}

LinkedList.prototype.traverse = function*() {
  var current = this.head;
  while (current) {
    yield(current.value);
    current = current.next;
  }
  return;
}

LinkedList.prototype.traverseReverse = function*() {
  var current = this.head;
  var mylist = [];
  while (current) {
    mylist.push(current.value); //push,pop=END :: unshift,shift=START
    current = current.next;
  }
  while (mylist.length>0) {
    yield(mylist.pop()); //push,pop=END :: unshift,shift=START
  }
  return;
}


if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
    module.exports.LinkedList = LinkedList;
    module.exports.LinkedListNode = LinkedListNode;

    console.log(module.filename);
    console.log(module.id);
    console.log(module.exports);
}

