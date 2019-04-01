Basic Foundation I
Objectives
Get comfortable with basic for loops, if/else statements, and functions.
Get comfortable building basic algorithms in preparation for the Python track
Please work on the following challenges and upload your work in a single file.

Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function arrXtoY(x,y) {
  newarr = [];
  for (idx=x; idx<=y; idx++) {
    newarr.push(idx);
  }
  return newarr;
}
console.log(arrXtoY(1,255));
{ output array here ... }

Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.
You may use a modulus operator for this exercise.
function getEvenSumX(x) {
  sum =0;
  for (idx=0; idx<=x; idx+=2) {
    sum+=idx;
  }
  return sum;
}
console.log(getEvenSumX(1000));
250500

Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000.
(e.g. 1+3+5+...+4997+4999).
function getOddSumX(x) {
  sum =0;
  for (idx=1; idx<=x; idx+=2) {
    sum+=idx;
  }
  return sum;
}
console.log(getOddSumX(5000));
6250000

Iterate an array - Write a function that returns the sum of all the values within an array.
(e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumArray(arr) {
  sum=0;
  for (idx=0; idx<arr.length; idx++) {
    sum+=arr[idx];
  }
  return sum;
}
console.log(sumArray([1,2,5])==8);
console.log(sumArray([-5,2,5,12])==14);
true
true

Find max - Given an array with multiple values, write a function that returns the maximum number in the array.
(e.g. for [-3,3,5,7] max is 7)
function arrayMax(arr) {
  max=arr[0];
  for (idx=1; idx<arr.length; idx++) {
    if (max<arr[idx]) {
      max=arr[idx];
    }
  }
  return max;
}
console.log(arrayMax([-3,3,5,7])==7);
true

Find average - Given an array with multiple values, write a function that returns the average of the values in the array.
(e.g. for [1,3,5,7,20] average is 7.2)
function arrayMean(arr) {
  sum=0;
  for (idx=0; idx<arr.length; idx++) {
    sum+=arr[idx];
  }
  return sum/arr.length;
}
console.log(arrayMean([1,3,5,7,20])==7.2);
true

Array odd - Write a function that would return an array of all the odd numbers between 1 to 50.
(ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function arrayOddX(x) {
  newarr = [];
  for (idx=1; idx<=x; idx+=2) {
    newarr.push(idx);
  }
  return newarr;
}
console.log(arrayOddX(50));
{ output array here ... }

Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.
For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function arrayValsGTY(arr,y) {
  count=0;
  for (idx=0; idx<=arr.length; idx++) {
    if (arr[idx]>y) {
      count++;
    }

  }
  return count;
}
console.log(arrayValsGTY([1, 3, 5, 7],3)==2);

Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself.
(e.g. [1,5,10,-2] will become [1,25,100,4])
function arraySquares(arr) {
  newarr = [];
  for (idx=0; idx<arr.length; idx++) {
    newarr.push(arr[idx] * arr[idx]);
  }
  return newarr;
}
console.log(arraySquares([1, 3, 5, 7]));
[ 1, 9, 25, 49 ]
console.log(arraySquares([1,5,10,-2]));
[1,25,100,4]

Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.
When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function arrayReplaceNegatives(arr) {
  for (idx=0; idx<=arr.length; idx++) {
    if (arr[idx]<0) {
      arr[idx]=0;
    }
  }
  return arr;
}
z = [1,5,10,-2]
console.log(arrayReplaceNegatives([1, 3, 5, -7]));
[1,3,5,0]
console.log(arrayReplaceNegatives([1,5,10,-2]));
[1,5,10,0]
console.log(arrayReplaceNegatives(z));
[1,5,10,0]

Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array.
(e.g. [1,5,10,-2] will return [10,-2,3.5])
function arrayMaxMinMean(arr) {
  sum=arr[0];
  min=arr[0];
  max=arr[0];
  newarr=[];
  for (idx=1; idx<arr.length; idx++) {
    sum+=arr[idx];
    if (max<arr[idx]) {
      max=arr[idx];
    }
    if (min>arr[idx]) {
      min=arr[idx];
    }
  }
  newarr.push(max);
  newarr.push(min);
  newarr.push(sum/arr.length);
  return newarr;
}
console.log(arrayMaxMinMean([1,5,10,-2])==[10,-2,3.5]);
true

Swap Values - Write a function that will swap the first and last values of any given array.
The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function arraySwapFL(arrin) {
  arr = arrin;
  temp=arr[0];
  arr[0] = arr[arr.length-1];
  arr[arr.length-1]=temp;
  return arr;
}
y=[-2,5,10,1];
z=[1,5,10,-2];
console.log(arraySwapFL(y));
console.log(arraySwapFL(y)==z);
true

Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'.
For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function arrayDoNegatives(arr) {
  var newarr = arr;
  for (var idx=0; idx<newarr.length; idx++) {
    if (newarr[idx]<0) {
      newarr[idx]='Dojo';
    }
  }
  return newarr;
}
console.log(arrayDoNegatives([-1,-3,2]));
[ 'Dojo', 'Dojo', 2 ]
