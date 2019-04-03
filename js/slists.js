//  https://repl.it/@bearfish47x/Javascript-Algorithms-SLists-v1


function Node(value) {
  this.value = value;
  this.next = null;
};

function SList() {
  this.head = null;
};


SList.prototype.removestart = function() {
  console.log("removestart()");
  if (this.head != null){
    if (this.head.next == null) {
      this.head = null;
    }
    else {
      this.head = this.head.next;
    }
  }
  this.display();
  return this;
};

SList.prototype.addstart = function(value) {
  console.log("addstart(" + value+ ")");
  var node = new Node(value);
  if (this.head != null){
    node.next = this.head;
  }
  this.head = node;
  this.display();
  return this;
};

SList.prototype.display = function() {
  var mylist = []
  var current = this.head;
  while (current) {
    mylist.push(current.value);
    current = current.next;
  }
  console.log(mylist);
  return this;
};


SList.prototype.add = function(value) {
  console.log("add(" + value+ ")");
  var node = new Node(value),
  current = this.head;
  if (!current) {
      this.head = node;
      this.display();
      return node;
  }
  while (current.next) {
      current = current.next;
  }
  current.next = node;
    this.display();
  return node;
};

SList.prototype.addbefore = function(value, before) {
  console.log("addbefore(" + value+ "," + before + ")");
  var node = new Node(value);
  if (this.head == null){
    this.head = node;
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

SList.prototype.remove = function(value) {
  console.log("remove(" + value +  ")");
  if (this.head==null){
    console.log("head==null");
    return this;
  }
  else if (this.head.value == value){
    this.head = this.head.next;
    console.log("this.head.value == value");
    this.display();
    return this;
  }
  else{
    var current = this.head;
    while (current.next){
      if (current.next.value == value)
      {
        console.log("found " + value + " after " + current.value)
        var temp = current.next;
        current.next = current.next.next;
        temp = null; //???? does this free up memory?
        this.display();
        return this;
      }
      else{
        current = current.next;
      }
    }
  }
  console.log("did not find value");
  this.display();
  return this;
}

SList.prototype.valuePosition = function(value) {
  console.log("Contains(" + value + ")");
  var current = this.head;
  var counter = 0;
  this.display();
  while(current){
    if (current.value==value){
      console.log("- true: Index = ", counter);
      return counter;
    }
    counter++;
    current = current.next;
  }
  console.log("- false: Index = -1");
  return -1;
}

SList.prototype.contains = function(value) {
  console.log("Contains(" + value + ")");
  var current = this.head;
  this.display();
  while(current){
    if (current.value==value){
      console.log("- true");
      return true;
    }
    current = current.next;
  }
  console.log("- false");
  return false;
}



SList.prototype.front = function() {
  var frontval = null;
  if (this.head!=null){
    frontval = this.head.value;
  }
  console.log("front = " + frontval);
  return frontval;
}
SList.prototype.end = function() {
  var endval = null;
  var current = this.head;
  while(current){
    endval = current.value
    current = current.next;
  }
  console.log("end = " + endval);
  return endval;
}
SList.prototype.length = function(value) {
  var current = this.head;
  var length = 0;
  while(current){
    length++;
    current = current.next;
  }
  console.log("length = " + length);
  return length;
}
SList.prototype.min = function(value) {
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
SList.prototype.max = function(value) {
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
SList.prototype.sum = function(value) {
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
SList.prototype.average = function(value) {
  var avg = null;
  if (this.length()>0){
    avg = this.sum() / this.length();
  }
  console.log("average = " + avg);
  return avg;
}
SList.prototype.find = function(value) {
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

SList.prototype.zipinorder = function(q) {
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

SList.prototype.reverselist = function() {
  console.log("reverselist()");
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
  // prev is new head of the input list
  this.head = previous;
  console.log("After: ");
  this.display();
  return this;
}



var list1 = new SList();
list1.add(1)
list1.add(2)
list1.add(3)
list1.add(4)
list1.addstart(-1)
list1.addstart(0)
list1.removestart()
list1.addbefore(0,1)
list1.addbefore(-9,-8)
list1.addbefore(-10,-9)
list1.remove(19)
list1.remove(0)
list1.remove(-1)
list1.remove(2)
list1.remove(-10)
list1.remove(-9)
list1.remove(-9)
list1.contains(-1)
list1.contains(1)

list1.length()
list1.min()
list1.max()
list1.sum()
list1.average()

list1.front()
list1.end()


var list1 = new SList();
var list2 = new SList();

list1.add(14);
list2.add(21);
list2.add(22);
list2.add(23);
list2.add(24);
list1.zipinorder(list2);


var list3 = new SList()
var list4 = new SList();

list3.add(31);
list3.add(32);
list3.add(33);
list3.add(34);
list4.add(41);
list3.zipinorder(list4);

var list5 = new SList()
var list6 = new SList();

list5.add(51);
list5.add(52);
list6.add(61);
list6.add(62);
list5.zipinorder(list6);

list1.reverselist();
list3.reverselist();
list5.reverselist();


SList.prototype.updateValueAtPosition = function(newvalue, position) {
  console.log("updateValueAtPosition(" + newvalue + "," + position + ")");
  var current = this.head;
  var counter = 0;
  this.display();
  while(current){
    if (position == counter){
      console.log("found: " + position + " = " + current.value);
      current.value = newvalue;
      console.log(" -- new: " + current.value);
      return current;
    }
    counter++;
    current = current.next;
  }
  console.log("not found");
  return null;
}


SList.prototype.swap = function(x,y) {
    console.log("Swap(" + x + "," + y + "), Before:") + this.display();
    var xpos=this.valuePosition(x), ypos=this.valuePosition(y);
    if (xpos>=0) {
        if (ypos>=0) {
            this.updateValueAtPosition(x, ypos);
            this.updateValueAtPosition(y, xpos);
            console.log("--- After:") + this.display();
        }
    }
}
SList.prototype.mintofront = function() {
    console.log("mintofront() Before:") + this.display();
    var min = this.min();
    if (min) {
        this.remove(min);
        this.addstart(min);
    }
    console.log("--- After:") + this.display();
    return;
}
SList.prototype.maxtoend = function() {
    console.log("maxtoend() Before:") + this.display();
    var max = this.max();
    if (max) {
        this.remove(max);
        this.add(max);
    }
    console.log("--- After:") + this.display();
    return;
}
SList.prototype.findprev = function(value) {
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


console.log();
list5.swap(52,51);

console.log();
list5.swap(52,51);

console.log();
list3.display();
list3.add(-19);
list3.add(38);
list3.mintofront();

console.log();
list3.display();
list3.addstart(100);
list3.maxtoend();

console.log();
list3.findprev(100);
list3.findprev(-19);


