// https://repl.it/@bearfish47x/Javascript-Algorithms-LinkedLists-v1
// ^^ deprecated

function Node(value, next = null) {
  this.value = value;
  this.next = next;
  // toString(callback) {
  //   return callback ? callback(this.value) : `${this.value}`;
  // }
};

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}


function LinkedList() {
  this.head = null;
  this.tail = null;
};


LinkedList.prototype.deleteHead = function() {
  console.log("deleteHead()");
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

  this.display();
  return deletedHead;
};


LinkedList.prototype.deleteTail = function() {
  console.log("deleteTail()");
  const deletedTail = this.tail;

  if (this.head === this.tail) {
    // There is only one node in linked list.
    this.head = null;
    this.tail = null;
    return deletedTail;
  }

  // Rewind to the last node and delete "next" link for the node before the last one.
  let currentNode = this.head;
  while (currentNode.next) {
    if (!currentNode.next.next) {
      currentNode.next = null;
    } else {
      currentNode = currentNode.next;
    }
  }
  this.tail = currentNode;
  this.display();
  return deletedTail;
};


LinkedList.prototype.prepend = function(value) {
  console.log("prepend(" + value+ ")");

  const node = new LinkedListNode(value, this.head);
  this.head = node;
  if (!this.tail) {
    this.tail = node;
  }

  this.display();
  return this;
};


LinkedList.prototype.append = function(value) {
  console.log("append(" + value+ ")");
  const node = new LinkedListNode(value);

  // If there is no head yet let's make new LinkedListNode a head.
  if (!this.head) {
    this.head = node;
    this.tail = node;
    this.display();
    return this;
  }

  // Attach new LinkedListNode to the end of linked list.
  this.tail.next = node;
  this.tail = node;

  this.display();
  return this;
};


LinkedList.prototype.insertBefore = function(value, before) {
  console.log("insertBefore(" + value + "," + before + ")");
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
        this.display();
        return this;
      }
      else{
        current = current.next;
      }
    }
    current.next = node;
  }
  this.display();
  return this;
}


LinkedList.prototype.delete = function(value) {
  console.log("delete(" + value +  ")");
  if (!this.head){
    return null;
  }

  let deletedNode = null;

  // If the head must be deleted then make next node that is differ
  // from the head to be a new head.
  while (this.head && this.head.value === value) {
    deletedNode = this.head;
    this.head = this.head.next;
  }

  let currentNode = this.head;

  if (currentNode !== null) {
    // If next node must be deleted then make next node to be a next next one.
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  // Check if tail must be deleted.
  if (this.tail.value === value) {
    this.tail = currentNode;
  }

  this.display();
  return deletedNode;
}



// LinkedList.prototype.valuePosition = function(value) {
//   console.log("Contains(" + value + ")");
//   var current = this.head;
//   var counter = 0;
//   this.display();
//   while(current){
//     if (current.value==value){
//       console.log("- true: Index = ", counter);
//       return counter;
//     }
//     counter++;
//     current = current.next;
//   }
//   console.log("- false: Index = -1");
//   return -1;
// }

LinkedList.prototype.contains = function(value) {
  var current = this.head;
  this.display();
  while(current){
    if (current.value==value){
      console.log("Contains(" + value + ") = true");
      return true;
    }
    current = current.next;
  }
  console.log("Contains(" + value + ") = false");
  return false;
}



// LinkedList.prototype.front = function() {
//   var frontval = null;
//   if (this.head!=null){
//     frontval = this.head.value;
//   }
//   console.log("front = " + frontval);
//   return frontval;
// }
// LinkedList.prototype.end = function() {
//   var endval = null;
//   var current = this.head;
//   while(current){
//     endval = current.value
//     current = current.next;
//   }
//   console.log("end = " + endval);
//   return endval;
// }
LinkedList.prototype.length = function(value) {
  var current = this.head;
  var length = 0;
  while(current){
    length++;
    current = current.next;
  }
  console.log("length = " + length);
  return length;
}
LinkedList.prototype.min = function(value) {
  var min = null;
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
  console.log("min = " + min);
  return min;
}
LinkedList.prototype.max = function(value) {
  var max = null;
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
  console.log("max = " + max);
  return max;
}
LinkedList.prototype.sum = function(value) {
  var sum = null;
  if (this.head!=null){
    sum = 0;
    var current = this.head;
    while(current){
      sum += current.value;
      current = current.next;
    }
  }
  console.log("sum = " + sum);
  return sum;
}
LinkedList.prototype.average = function(value) {
  var avg = null;
  if (this.length()>0){
    avg = this.sum() / this.length();
  }
  console.log("average = " + avg);
  return avg;
}
LinkedList.prototype.find = function(value) {
  console.log("find(" + value + ")");
  var current = this.head;
  this.display();
  while(current){
    if (current.value==value){
      console.log("found " + current);
      return current;
    }
    current = current.next;
  }
  console.log("not found");
  return null;
}

LinkedList.prototype.zipinorder = function(q) {
  console.log("zipinorder(" + q+ ")");
  console.log("Before: ");
  this.display();
  q.display();
  // Main function that inserts nodes of linked list q into p at
  // alternate positions. Since head of first list never changes
  // and head of second list/ may change, we need single pointer
  // for first list and double pointer for second list.
  var p_current = this.head;
  var q_current = q.head;

  if (p_current==null) {
    this.head = q.head;
  }
  else{
    while ((p_current != null) && (q_current != null))  {
      var p_next = p_current.next;
      var q_next = q_current.next;
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
  console.log("After: ");
  this.display();
  q.display();
  return this;
};


LinkedList.prototype.reverse = function() {
  console.log("reverse()");
  console.log("Before: ");
  this.display();
  var current = this.head;
  var next = null;
  var previous = null;
  // reverse the list
  while(current != null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  // tail is old head
  this.tail = this.head;
  // prev is new head of the input list
  this.head = previous;
  console.log("After: ");
  this.display();
  return this;
}


LinkedList.prototype.display = function() {
//  console.log("display()");
  var current = this.head;
  var mylist = [];
  while (current) {
    mylist.push(current.value);
    current = current.next;
  }
  console.log(mylist);
  return this;
};
LinkedList.prototype.displayReverse = function() {
  var current = this.head;
  var mylist = [];
  while (current) {
    mylist.unshift(current.value); //push,pop=END :: unshift,shift=START
    current = current.next;
  }
  console.log(mylist);
  return this;
};





// LinkedList.prototype.updateValueAtPosition = function(newvalue, position) {
//   console.log("updateValueAtPosition(" + newvalue + "," + position + ")");
//   var current = this.head;
//   var counter = 0;
//   this.display();
//   while(current){
//     if (position == counter){
//       console.log("found: " + position + " = " + current.value);
//       current.value = newvalue;
//       console.log(" -- new: " + current.value);
//       return current;
//     }
//     counter++;
//     current = current.next;
//   }
//   console.log("not found");
//   return null;
// }


// LinkedList.prototype.swap = function(x,y) {
//     console.log("Swap(" + x + "," + y + "), Before:") + this.display();
//     var xpos=this.valuePosition(x), ypos=this.valuePosition(y);
//     if (xpos>=0) {
//         if (ypos>=0) {
//             this.updateValueAtPosition(x, ypos);
//             this.updateValueAtPosition(y, xpos);
//             console.log("--- After:") + this.display();
//         }
//     }
// }
LinkedList.prototype.swap = function(val1, val2) {
  console.log("swap(" + val1 + "," + val2 + "), Before:");
  this.display();

  //Check if head is null
  if(this.head == null){
      console.log("Can't swap, linked list is empty");
      return this;
  }

  //Take reference to the head of the linked list
  var n = this.head;
  var temp = null;
  var node1 = null;
  var node2 = null;

  //Call findNode recursively
  findNode(n);

  function findNode(n){
      if(n.value == val1){ node1 = n; }
      if(n.value == val2){ node2 = n; }
      //if either of node1, node2 is not set 
      if(!node1 || !node2){
          if(n.next === null){
              console.log("Linked List ended, didn't find both the nodes");
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
  this.display();
  return this;
};


LinkedList.prototype.mintofront = function() {
    console.log("mintofront() Before:") + this.display();
    var min = this.min();
    if (min) {
        this.delete(min);
        this.prepend(min);
    }
    console.log("--- After:") + this.display();
    return;
}


LinkedList.prototype.maxtoend = function() {
    console.log("maxtoend() Before:") + this.display();
    var max = this.max();
    if (max) {
        this.delete(max);
        this.append(max);
    }
    console.log("--- After:") + this.display();
    return;
}


LinkedList.prototype.findprev = function(value) {
  console.log("findprev(" + value + ")");
  var current = this.head;
  var prev = null;
  this.display();
  while(current){
    if (current.value==value){
        if (prev) {
            console.log("found " + current.value + ", prev = " + prev.value);
        }
        else {
            console.log("found " + current.value + ", prev = null");
        }
      return prev;
    }
    prev = current;
    current = current.next;
  }
  console.log("not found");
  return null;
}


/**
 * @param {*[]} values - Array of values that need to be converted to linked list.
 * @return {LinkedList}
 */
LinkedList.prototype.fromArray = function(values) {
  values.forEach(value => this.append(value));

  return this;
}

/**
 * @return {LinkedListNode[]}
 */
LinkedList.prototype.toArray = function() {
  const nodes = [];

  let currentNode = this.head;
  while (currentNode) {
    nodes.push(currentNode);
    currentNode = currentNode.next;
  }

  return nodes;
}

/**
 * @param {function} [callback]
 * @return {string}
 */
//toString(callback) {
LinkedList.prototype.toString = function(callback) {
  return this.toArray().map(node => node.toString(callback)).toString();
}




LinkedList.prototype.traverse = function() {
  console.log("traverse()");
}

LinkedList.prototype.traverseReverse = function() {
  console.log("traverseReverse()");
}







var list1 = new LinkedList();
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

var list1 = new LinkedList();
var list2 = new LinkedList();

list1.append(14);
list2.append(21);
list2.append(22);
list2.append(23);
list2.append(24);
list1.zipinorder(list2);


var list3 = new LinkedList()
var list4 = new LinkedList();

list3.append(31);
list3.append(32);
list3.append(33);
list3.append(34);
list4.append(41);
list3.zipinorder(list4);

var list5 = new LinkedList()
var list6 = new LinkedList();

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


console.log("MUST DO TRAVERSE && TRAVERSEREVERSE!!");