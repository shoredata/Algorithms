function Node(value) {
  this.value = value;
  this.next = null;
};

function SList() {
  this.head = null;
};

Console = function () {
  this.log = function(msg){ debug(msg) };
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
        temp = null; //???? does this free up memorry? ask katie?
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

SList.prototype.contains = function(value) {
  var current = this.head;
  this.display();
  while(current){
    if (current.value==value){
      console.log("SList.contains(" + value + ") = true");
      return true;
    }
    current = current.next;
  }
  console.log("SList.contains(" + value + ") = false");
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
SList.prototype.swap = function(x,y) {
}
SList.prototype.mintofront = function() {
}
SList.prototype.maxtoend = function() {
}
SList.prototype.findprev = function(value) {

}
SList.prototype.find = function(value) {
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

var console = new Console();
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



// OUTPUT::
//
// 11:04:00 bart ~/projects/cd/algorithms/slist
// $ js slist_exercises.js
// --> add(1)
// --> 1
// --> add(2)
// --> 1,2
// --> add(3)
// --> 1,2,3
// --> add(4)
// --> 1,2,3,4
// --> addstart(-1)
// --> -1,1,2,3,4
// --> addstart(0)
// --> 0,-1,1,2,3,4
// --> removestart()
// --> -1,1,2,3,4
// --> addbefore(0,1)
// --> -1,0,1,2,3,4
// --> addbefore(-9,-8)
// --> -1,0,1,2,3,4,-9
// --> addbefore(-10,-9)
// --> -1,0,1,2,3,4,-10,-9
// --> remove(19)
// --> did not find value
// --> -1,0,1,2,3,4,-10,-9
// --> remove(0)
// --> found 0 after -1
// --> -1,1,2,3,4,-10,-9
// --> remove(-1)
// --> this.head.value == value
// --> 1,2,3,4,-10,-9
// --> remove(2)
// --> found 2 after 1
// --> 1,3,4,-10,-9
// --> remove(-10)
// --> found -10 after 4
// --> 1,3,4,-9
// --> remove(-9)
// --> found -9 after 4
// --> 1,3,4
// --> remove(-9)
// --> did not find value
// --> 1,3,4
// --> 1,3,4
// --> SList.contains(-1) = false
// --> 1,3,4
// --> SList.contains(1) = true
// --> length = 3
// --> min = 1
// --> max = 4
// --> sum = 8
// --> length = 3
// --> sum = 8
// --> length = 3
// --> average = 2.6666666666666665
// --> front = 1
// --> end = 4
