function Node(value) {
  this.value = value;
  this.next = null;
};
function QueueList(){
  this.head = null;
  this.tail = null;
};
// Console = function () {
//   this.log = function(msg){ debug(msg) };
// };


QueueList.prototype.display = function() {
  var mylist = []
  var current = this.head;
  while (current) {
    mylist.push(current.value);
    current = current.next;
  }
  console.log(mylist);
  return this;
};

QueueList.prototype.addend = function(value){
  console.log("addend(" + value + ")");
  this.display();
  var node = new Node(value);
  if (this.head==null) {
    this.head = node;
    this.tail=node
  }
  else {
    this.tail.next = node;
    this.tail = node;
  }
  this.display();
  return this;
};

QueueList.prototype.removefront = function() {
  console.log("removefront()");
  this.display();
  if (this.head==this.tail){
    //catches empty list and list of 1
    this.head=null;
    this.tail=null;
  }
  else{
    var temp = this.head;
    this.head = this.head.next;
    temp.next = null; // remove ref for garbage collection
  }
  this.display();
  return this;
};

// var console = new Console();
q1 = new QueueList();
q1.addend(1);
q1.removefront();
q1.addend(10);
q1.addend(11);
q1.removefront();


// OUTPUT::
// 11:09:35 bart ~/projects/cd/algorithms/slist
// $ js queue_exercises.js
// --> addend(1)
// -->
// --> 1
// --> removefront()
// --> 1
// -->
// --> addend(10)
// -->
// --> 10
// --> addend(11)
// --> 10
// --> 10,11
// --> removefront()
// --> 10,11
// --> 11

// Bart@bart-i7-6000k MINGW64 ~/projects/algorithms/js (master)
// $ node queues.js
// addend(1)
// []
// [ 1 ]
// removefront()
// [ 1 ]
// []
// addend(10)
// []
// [ 10 ]
// addend(11)
// [ 10 ]
// [ 10, 11 ]
// removefront()
// [ 10, 11 ]
// [ 11 ]

