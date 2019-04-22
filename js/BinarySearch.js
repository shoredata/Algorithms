// https://stackoverflow.com/questions/38323787/how-to-create-a-binary-search-with-recursion
//
// 1. If M == T, return true
// 2. If length of ARR is 0, return false (note: step 1 short circuits, ensuring we only hit step 2 if step 1 evaluates to false)
// 3. If T < M, return the result of the recursion on the lower half of ARR
// 4. If T > M, return the result of the recursion on the the latter half of ARR
//
export function binarySearchFound(arr, target, start=0, stop=(arr.length-1)) {
    let midPoint = Math.floor(((stop-start)/2) + start)
    switch (true) {
        case arr[midPoint] === target:
            return true
        case stop - start === 0:
            return false
        case arr[midPoint] < target:
            return binarySearchFound(arr, target, midPoint+1, stop)
        case arr[midPoint] > target:
            return binarySearchFound(arr, target, start, midPoint)
    }
}
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(binarySearch(arr,4));


// there is another great example here, also a detailed explanaiton of bs:
// https://codeburst.io/binary-search-in-javascript-a-practical-example-7fda60ce59a1
//
/* https://jsfiddle.net/aryzhov/pkfst550/
 *
 * Binary search in JavaScript.
 * Returns the index of of the element in a sorted array or (-n-1) where n is the insertion point for the new element.
 * Parameters:
 *     ar - A sorted array
 *     el - An element to search for
 *     compare_fn - A comparator function. The function takes two arguments: (a, b) and returns:
 *        a negative number  if a is less than b;
 *        0 if a is equal to b;
 *        a positive number of a is greater than b.
 * The array may contain duplicate elements. If there are more than one equal elements in the array, 
 * the returned value can be the index of any one of the equal elements.
 */
export function binarySearchInsertionPoint(ar, el, compare_fn) {
  var m = 0;
  var n = ar.length - 1;
  while (m <= n) {
      var k = (n + m) >> 1;
      var cmp = compare_fn(el, ar[k]);
      if (cmp > 0) {
          m = k + 1;
      } else if(cmp < 0) {
          n = k - 1;
      } else {
          return k;
      }
  }
  return -m - 1;
}

export function compareNumbers(a, b) {
  return a - b;
}


export function randomTestBinarySearch() {
  let fails = 0;
  let color = "";
  for(test = 0; test < 10; test++) {
    var ar = []
    let array_length = Math.floor(Math.random() * 100)
    for(var i = 0; i < array_length; i++) {
      ar[i] = Math.floor(Math.random() * 100)
    }
    ar = ar.sort()
    // console.log("Test " + test + ":"+ar, color='black');
    for(var i = 0; i <= 100; i++) {
      var n = binarySearchInsertionPoint(ar, i, compareNumbers)
      if((n >= 0 && ar[n] !== i) ||
          (n < 0 && ((-n-1) < ar.length && ar[-n-1] <= i)) ||
          (n < 0 && (-n-2 >= 0 && ar[-n-2] >= i))) {
          console.log("Test failed: i="+i+", n="+n, color='red');
          fails = fails + 1
          break
      }
    }
  }
  if (fails == 0) {
    // console.log("All tests passed", color='green');
  } else {
    console.log(""+fails+" tests failed!!!", color='red');
  }
  return fails;
}