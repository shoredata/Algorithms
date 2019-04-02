Basic Foundation II
Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".
Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function makeItBig(arr) {
  newarr = arr;
  for (idx=0; idx<newarr.length; idx++) {
    if (newarr[idx]>0) {
      newarr[idx]="big";
    }
  }
  return newarr;
}
console.log(makeItBig([-1,3,5,-5]));
[ -1, 'big', 'big', -5 ]

Print Low, Return High - Create a function that takes array of numbers.
The function should print the lowest value in the array, and return the highest value in the array.
function arrayMinMax(arr) {
  min=arr[0];
  max=arr[0];
  for (idx=1; idx<arr.length; idx++) {
    if (max<arr[idx]) {
      max=arr[idx];
    }
    if (min>arr[idx]) {
      min=arr[idx];
    }
  }
  console.log(min);
  return max;
}
console.log(arrayMinMax([1,5,10,-2]));
-2
10

Print One, Return Another - Build a function that takes array of numbers.
The function should print second-to-last value in the array, and return first odd value in the array.
function arraySTLPO(arr) {
  console.log(arr[arr.length-2]);
  for (var idx=0; idx<arr.length; idx++) {
    if (arr[idx]%2==1) {
      return arr[idx];
    }
  }
  return 0;
}
console.log(arraySTLPO([1,5,10,-2]));
10
1

Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.
Calling double([1,2,3]) should return [2,4,6] without changing original.
function arrayDoubles(arr) {
  newarr = [];
  for (idx=0; idx<arr.length; idx++) {
    newarr.push(arr[idx] * 2);
  }
  return newarr;
}
console.log(arrayDoubles([1, 3, 5, 7]));
console.log(arrayDoubles([1,5,10,-2]));
console.log(arrayDoubles([1,2,3]));
[ 2, 6, 10, 14 ]
[ 2, 10, 20, -4 ]
[ 2, 4, 6 ]

Count Positives - Given array of numbers, create function to replace last value with number of positive values.
Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function arrayCountPositives(arr) {
  var count=0;
  for (var idx=0; idx<arr.length; idx++) {
    if (arr[idx]>0) {
      count++;
    }
  }
  arr[arr.length-1]=count;
  return arr;
}
console.log(arrayCountPositives([-1,1,1,1]) == [ -1, 1, 1, 3 ]);
true

Evens and Odds - Create a function that accepts an array.
Every time that array has three odd values in a row, print "That's odd!".
Every time the array has three evens in a row, print "Even more so!"
function arrayThreeInARow(arr) {
  for (var idx=0; idx<arr.length-2; idx++) {
    if (arr[idx]%2==1) {
      if (arr[idx+1]%2==1) {
        if (arr[idx+2]%2==1) {
          console.log("Thats odd!");
        }
      }
    }
    if (arr[idx]%2==0) {
      if (arr[idx+1]%2==0) {
        if (arr[idx+2]%2==0) {
          console.log("Even more so!");
        }
      }
    }
  }
}
arrayThreeInARow([0,2,4,1,3,5]);
Even more so!
Thats odd!
arrayThreeInARow([1,2,4,0,3,5]);
Even more so!
arrayThreeInARow([1,3,711,3,2]);
Thats odd!
Thats odd!

Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).
Afterward console.log each array value and return arr.
function incOddSeconds(arr) {
  var newarr = arr;
  for (var idx=0; idx<arr.length; idx++)
  {
    if (idx%2==1) {
      newarr[idx] +=1;
    }
    console.log(arr[idx]);
  }
  return newarr;
}
incOddSeconds([1,1,1,1,1,1,1,1,1]);
 [ 1, 2, 1, 2, 1, 2, 1, 2, 1 ]

Previous Lengths - You are passed an array containing strings.
Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.
function stringLengthArray(arr) {
  newarr=arr;
  for (var idx=1; idx<arr.length; idx++) {
    var s = arr[idx-1].toString();
    newarr[idx] = s.length;
  }
  console.log(newarr);
  return newarr;
}
stringLengthArray(['abc',"98cn75 98 734899y8", '345v34 t44s', '', "jkju890joij"]);
[ 'abc', 3, 1, 1, 1 ]

Add Seven to Most - Build function that accepts array.
Return a new array with all values except first, adding 7 to each. Do not alter the original array.
function addSeven(arr) {
  newarr=arr;
  for (var idx=1; idx<arr.length; idx++) {
    newarr[idx] = arr[idx]+7;
  }
  console.log(newarr);
  return newarr;
}
addSeven([ 3, 1, 1, 1 ]);
[ 3, 8, 8, 8 ]

Reverse Array - Given an array, write a function that reverses values, in-place.
Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.
(Hint: you'll need to swap values).
function arrayReverse(arr) {
  for (var idx=0; idx<arr.length/2; idx++) {
    var temp=arr[idx];
    arr[idx]=arr[arr.length-idx-1];
    arr[arr.length-idx-1] = temp;
  }
  console.log(arr);
  // return arr;
}
arrayReverse([ 1, 3, 5, 2, 4, 6 ]);
[ 6, 4, 2, 5, 3, 1 ]

Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1).
Given [1,-3,5], return [-1,-3,-5].
function arrayForceNegative(arr) {
  for (var idx=0; idx<arr.length; idx++) {
    if (arr[idx]>0) {
      arr[idx] = arr[idx]*-1;
    }
  }
  console.log(arr);
  return arr;
}
arrayForceNegative([ -1, 3, -5, 2, -4, 6 ]);
[ -1, -3, -5, -2, -4, -6 ]
arrayForceNegative([ 1, -3, 5 ]);
[ -1, -3, -5 ]

Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".
If no array elements are "food", then print "I'm hungry" once.
function findFood(arr) {
  var bfound=false;
  for (var idx=0; idx<arr.length; idx++)
  {
    if (arr[idx]=="food") {
      bfound=true;
      console.log("yummy");
    }
  }
  if (!bfound) {
    console.log("I'm hungry");
  }
}
findFood(["feed", "feet", "forks", "food", "food"]);
findFood(["feet", "food"]);
findFood(["feet"]);
yummy
yummy
yummy
I'm hungry

'Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.
Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function arrayReverseSkip(arr) {
  for (var idx=0; idx<arr.length/2; idx+=2) {
    var temp=arr[idx];
    arr[idx]=arr[arr.length-idx-1];
    arr[arr.length-idx-1] = temp;
  }
  console.log(arr);
  // return arr;
}
arrayReverseSkip([true,42,"Ada",2,"pizza"]);
[ 'pizza', 42, 'Ada', 2, true ]
arrayReverseSkip([1,2,3,4,5,6]);
[ 6, 2, 4, 3, 5, 1 ]

Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.
For example, scaleArray([1,2,3],3) should return [3,6,9].
function arrayScale(arr,scale) {
  newarr=arr;
  for (var idx=0; idx<arr.length; idx++) {
    newarr[idx] = arr[idx]*scale;
  }
  console.log(newarr);
  return newarr;
}
arrayScale([1,2,3],3);
[ 3, 6, 9 ]
arrayScale([ 5, 10, 15 ],1/3);
[ 1.6666666666666665, 3.333333333333333, 5 ]
