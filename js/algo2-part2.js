Print 1 to x
Please complete the codes below to have the function print all the integers from 1 to x.  If x is negative, have it print/log "negative number' and have the function return false.

function printUpTo(x){
  var breturn = true;
  if (x<0)
  {
    console.log("negative number");
    breturn = false;
  }
  else if (x==0)
  {
    console.log("zero");
    breturn = false;
  }
  else {
    for (var idx=1; idx<=x; idx++) {
      console.log(idx);
    }
  }
  return breturn;
}
printUpTo(1000000); // should print all the integers from 1 to 1000000
y = printUpTo(-10); // should return false
console.log(y); // should print false



PrintSum
Please complete the code below to have the function print integers from 0 to 255 and with each integer print the sum so far.  Have the function return the final sum

function printSum(x){
  sum = 0;
  for (var idx=0; idx<=255; idx++){
    sum+=idx;
    console.log(idx + " " + sum);
  }
  return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32385copy



PrintSumArray
Please complete the code below to have the function return the sum of all the values in a given array

function printSumArray(x){
  sum = 0;
  for(var i=0; i<x.length; i++) {
    sum += x[i];
  }
  return sum;
}
console.log( printSumArray([1,2,3]) ); // should log 6



Create a function that returns the largest element in a given array.  For example largestElement( [1,30,5,7] ) should return 30.

function largestElement(x){
  var max = x[0];
  for(var i=1; i<x.length; i++) {
    if (max<x[i]){
      max = x[i];
    }
  }
  return max;
}
console.log( largestElement( [1,30,5,7] ))  //should return 30
