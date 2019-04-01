Algorithm V

1. Return the given array, after setting any negative values to zero.
For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].
function resetNegatives(arr) {
  var newarr = [];
  for (var idx=0; idx<arr.length; idx++) {
    if (arr[idx]<0) {
      newarr.push(0);
    }
    else {
      newarr.push(arr[idx]);
    }
  }
  return newarr;
}

2. Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.
For example moveForward( [1,2,3]) should return [2,3,0].
function MoveForward(arr) {
  var newarr = [];
  for (var idx=0; idx<arr.length-1; idx++) {
    newarr.push(arr[idx+1]);
  }
  newarr.push(0);
  return newarr;
}

3. Given an array, return an array with values in a reversed order.
For example, returnReversed([1,2,3]) should return [3,2,1].
function ReturnReversed(arr) {
  var newarr = arr.copy();
  for (var idx=0; idx<arr.length/2; idx++)
  {
    var temp = newarr[idx];
    newarr[idx]=newarr[newarr.length-idx];
    newarr[newarr.length-idx]=temp;
  }
  return newarr;
}


4. Create a function that changes a given array to list each original element twice, retaining original order.
Have the function return the new array.
For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
function RepeatTwice(arr) {
  var newarr[];
  for (var idx=0; idx<arr.length; idx++) {
    newarr.push(arr[idx]);
    newarr.push(arr[idx]);
  }
  return newarr;
}

At this point, it's CRITICAL that you can complete all the 13 challenges in the algorithm app, all under 2 minutes.  Please do the challenges over and over again until you can complete each of the challenge under 2 minutes.

=== D O N E ===
