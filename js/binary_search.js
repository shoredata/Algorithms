// https://stackoverflow.com/questions/38323787/how-to-create-a-binary-search-with-recursion

// 1. If M == T, return true
// 2. If length of ARR is 0, return false (note: step 1 short circuits, ensuring we only hit step 2 if step 1 evaluates to false)
// 3. If T < M, return the result of the recursion on the lower half of ARR
// 4. If T > M, return the result of the recursion on the the latter half of ARR

function binarySearch(arr, target, start=0, stop=(arr.length-1)) {

  let midPoint = Math.floor(((stop-start)/2) + start)

  switch (true) {
    case arr[midPoint] === target:
      return true
    case stop - start === 0:
      return false
    case arr[midPoint] < target:
      return binarySearch(arr, target, midPoint+1, stop)
    case arr[midPoint] > target:
      return binarySearch(arr, target, start, midPoint)
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr,4));
