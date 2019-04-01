Algorithm IV
By now, we hope you feel comfortable with the prediction challenges.  If not, please make sure you re-do the algorithm prediction challenges at least 2 times before the end of this week.

1. Given an array and a value Y, count and print the number of array values greater than Y.
function CountAndPrintGreater(arr, y) {
  var icount = 0;
  for (var idx =0; idx< arr.length; idx++) {
    if (arr[idx]>y) {
      icount++;
    }
  }
  console.log(icount);
}

2. Given an array, print the max, min and average values for that array.
function PrintMinMaxMean(arr) {
  var min=0; max=0; mean=0;
  if (arr.length>0) {
    min=arr[0];
    max=arr[0];
    mean=arr[0];
    for (var idx=1; idx< arr.length; idx++) {
      if (min>arr[idx]) {
        min=arr[idx];
      }
      if (max<arr[idx]) {
        max=arr[idx];
      }
      mean+=arr[idx]/
    }
    mean = mean/arr.length;
  }
  console.log("min:"+min+",max:"+max+",mean:"+mean);
}

3. Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.
For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function ReplaceNegatives(arr) {
  newarr = [];
  for (idx=0; idx<arr.length; idx++) {
    if (arr<0) {
      newarr.push("Dojo");
    }
    else {
      newarr.push(arr[idx]);
    }
  }
  return newarr;
}

4. Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).
For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
function RemoveVals(arr, start, end) {
  var imoved = 0;
  var source = end+1;
  while(source <= arr.length) {
    if (source < arr.length) {
      var target = source - end + start - 1;
      arr[target] = arr[source];
    }
    imoved++;
    source++;
  }
  for (var idx=0; idx<imoved; idx++) {
    arr.pop();
  }
}

Now, please revisit the algorithm app (algorithm.codingdojo.com) and make sure you can do all 13 challenges under 2 minutes.
If you're not able to do any of the challenge under 2 minutes, please spend up to 2 hours re-doing the algorithm challenges (both the prediction challenges as well as the 13 challenges).
==DONE==
