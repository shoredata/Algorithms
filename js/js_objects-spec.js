// Playing with Objects
// Objectives
//
// Practice iterating through an array of objects/dictionaries.
// Imagine that you are given an array of objects.  For example,
//
// var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
// How would you print/log Johns age?
// How would you print/log the name of the first object?
// How would you print/log the name and age of each user using a for loop?  Your output should look something like this
// Michael - 37
// John - 30
// David - 27
//
//

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
function findUserByName(users, name) {
  var iuser = -1;
  for (var idx=0; idx<users.length; idx++) {
    if (users[idx].name==name) {
      iuser = idx;
    }
  }
  return iuser;
}
function listUsers(users) {
  for (var idx=0; idx<users.length; idx++) {
    console.log(users[idx].name + " - " + users[idx].age);
  }
}
var ijohn=findUserByName(users, "John");
console.log("John is id=" + ijohn);
console.log("John is " + users[ijohn].age);
console.log("The first User is " + users[0].name);
listUsers(users);
====================
John is id=1
John is 30
The first User is Michael
Michael - 37
John - 30
David - 27
