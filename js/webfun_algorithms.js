// https://repl.it/@bearfish47x/JS-Algorithms-Web-Fundamentals
// tests can be run at ^^^


// INTEGERS
// ============================================================================

console.log("1. ");
function PrintPositiveUpToInteger(x){
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
console.log(10, true, ":", PrintPositiveUpToInteger(10));
console.log(0, false, ":", PrintPositiveUpToInteger(0));
console.log(-7, false, ":", PrintPositiveUpToInteger(-7));
console.log("");

console.log("2. ");
function PrintSumToInteger(x){
  sum = 0;
  for (var idx=0; idx<=x; idx++){
    sum+=idx;
    // console.log(idx + " " + sum);
  }
  return sum
}
console.log(32640, ":", PrintSumToInteger(255)); //32640
console.log("");


// ARRAYS
// ============================================================================

console.log("3. ");
function GetLargestArrayElement(x){
  var max = x[0];
  for(var i=1; i<x.length; i++) {
    if (max < x[i]){
      max = x[i];
    }
  }
  return max;
}
console.log(30, ":", GetLargestArrayElement([1,30,5,7]));
console.log("");


console.log("4. ");
//RemoveDup(arr)
  // *InPlace
  // *Time of O(n)
function RemoveDuplicatesFromArray(arr) {
    var setnodupes = new Set(); 
    var arrremove = [];
    for(var i=0; i<arr.length; i++) {
        if (setnodupes.has(arr[i])) {
          arrremove.push(i);
        }
        else {
          setnodupes.add(arr[i]);
        }
    }
    for(var i=0; i<arrremove.length; i++) {
      RemoveArrayItemsInPlace(arr, arrremove[i],arrremove[i]);
    }
    return arr;
}
console.log([1,7,30,5], ":", RemoveDuplicatesFromArray([1,7, 30,5,7,1,7]));
console.log([1,7], ":", RemoveDuplicatesFromArray([1,7]));
console.log([1,7], ":", RemoveDuplicatesFromArray([1,7,1,1,1,]));
console.log([], ":", RemoveDuplicatesFromArray([]));
console.log("");


console.log("5. ");
function PushFront(arr,val) {
    InsertItemInArrayAtPosition(arr,0,val);
    return arr;
}
console.log([1,30,5,7], ":", PushFront([30,5,7], 1));
console.log("");

console.log("8. ");
function InsertItemInArrayAtPosition(arr,index,val){
    arr.push(0);
    for (var idx=arr.length-1; idx>index; idx--) {
        arr[idx]=arr[idx-1];
    }
    arr[index] = val;
    return arr;
}
console.log([0,1,2,30,5,7], ":", InsertItemInArrayAtPosition([0,1,30,5,7],2,2));
console.log("");

console.log("9. ");
function GetArrayMin(x){
    if (x.length==0) {
        return 0;
    }
    min = x[0];
    for(var i=1; i<x.length; i++) {
        if (min > x[i]) {
            min = x[i];
        }
    }
    return min;
}
console.log(1, ":", GetArrayMin([1,2,3]));
console.log("");

console.log("10. ");
function GetArrayMax(x){
    if (x.length==0) {
        return 0;
    }
    var max = x[0];
    for(var i=1; i<x.length; i++) {
        if (max < x[i]) {
            max = x[i];
        }
    }
    return max;
}
console.log(3, ":", GetArrayMax([1,2,3]));
console.log("");

console.log("11. ");
function GetArraySum(x){
  var sum = 0;
  for(var i=0; i<x.length; i++) {
    sum += x[i];
  }
  return sum;
}
console.log(6, ":", GetArraySum([1,2,3]));
console.log("");

console.log("12. ");
function GetArrayAverage(x){
    if (x.length==0) {
        return 0;
    }
    sum = 0;
    for (var idx=0; idx<x.length; idx++) {
        sum += x[idx];
    }
    return sum/x.length;
}
console.log(2, ":", GetArrayAverage([1,2,3]));
console.log(5,":",  GetArrayAverage([2,5,8]));
console.log("");

console.log("13. ");
function ZipArrays(arr1, arr2) {
    var newobj = {};
    for (var i=0; i<arr1.length; i++) {
        newobj[arr1[i]] = arr2[i];
    }
    return newobj;
}
testa = ['fruit', 'veg', 'meat']
testb = ['apple', 'tomato', 'beef']
console.log(testa + " + " + testb + ":" )
console.dir(ZipArrays(testa,testb))
console.log("");


console.log("14. ");
function CountAndPrintGreater(arr, y) {
  var icount = 0;
  for (var idx =0; idx<arr.length; idx++) {
    if (arr[idx]>y) {
      icount++;
    }
  }
  return icount;
}
console.log(3, ":", CountAndPrintGreater([1,2,3,4,5,6],3));
console.log("");


console.log("15. ");
function ReplaceNegatives(arr) {
  var newarr = [];
  for (idx=0; idx<arr.length; idx++) {
    if (arr[idx]<0) {
      newarr.push(0);
    }
    else {
      newarr.push(arr[idx]);
    }
  }
  return newarr;
}
console.log([1,2,0,0,5],":", ReplaceNegatives( [1,2,-3,-5,5]));
console.log("");


console.log("16. ");
function RemoveArrayItemsInPlace(arr, start, end) {
  // console.log(arr, start, end);
  var isource = end + 1;
  var itarget = start;
  while(isource < arr.length) {
    arr[itarget] = arr[isource];
    isource++;
    itarget++;
  }
  for (var idx=0; idx<end-start+1; idx++) {
    arr.pop();
  }
  return arr;
}
console.log([30], ":", RemoveArrayItemsInPlace([20,30],0,0));
console.log([20], ":", RemoveArrayItemsInPlace([20,30],1,1));
console.log([], ":", RemoveArrayItemsInPlace([20,30],0,1));
console.log([20,30,70], ":", RemoveArrayItemsInPlace([20,30,40,50,60,70],2,4));
console.log([20,30,40], ":", RemoveArrayItemsInPlace([20,30,40,70],3,3));
console.log("");


console.log("16a. ");
function RemoveArrayItem(arr,index) {
    RemoveArrayItemsInPlace(arr, index, index);
    return arr;
}
console.log([1,30,5,7], 1, ":", RemoveArrayItem([1,9,30,5,7], 1));
console.log("");

console.log("16b. ");
function PopFront(arr) {
    RemoveArrayItemsInPlace(arr, 0, 0);
    return arr;
}
console.log([1,30,5,7], ":", PopFront([0,1,30,5,7]));
console.log("");



console.log("17. ");
function MoveArrayForward(arr) {
  var newarr = [];
  for (var idx=0; idx<arr.length-1; idx++) {
    newarr.push(arr[idx+1]);
  }
  newarr.push(0);
  return newarr;
}
console.log([2,3,0], ":", MoveArrayForward([1,2,3]));
console.log("");


console.log("18. ");
function ReverseArray(arr) {
  for (var idx=0; idx<arr.length/2; idx++)
  {
    var temp = arr[idx];
    arr[idx] = arr[arr.length-idx-1];
    arr[arr.length-idx-1] = temp;
  }
  return arr;
}
console.log([3,2,1], ":", ReverseArray([1,2,3]));
console.log("");


//DoubleUp(arr)
//a. repeat in place, below
//b. mult each by 2
//c. square

//a.

console.log("19. ");
function RepeatArraysItemsInPlace(arr) {
  var newarr = [];
  for (var idx=0; idx<arr.length; idx++) {
    newarr.push(arr[idx]);
    newarr.push(arr[idx]);
  }
  return newarr;
}
console.log(['a','a',1,1,"Bob","Bob"], ":", RepeatArraysItemsInPlace(['a',1,"Bob"])); //['a','a',1,1,"Bob","Bob"]
console.log("");

//b. 

console.log("20. ");
function DoubleEachArrayValue(arr){
  for (var idx=0; idx< arr.length; idx++) {
    arr[idx] *= 2;
  }
   return arr;
}
console.log([2,4,6], ":", DoubleEachArrayValue([1,2,3]));
console.log([4,10,16], ":", DoubleEachArrayValue([2,5,8]));
console.log("");

//c.

console.log("21. ");
function SquareEachArrayValue(arr){
  for (var idx=0; idx< arr.length; idx++) {
    arr[idx] *= arr[idx];
  }
   return arr;
}
console.log([1,4,9], ":", SquareEachArrayValue([1,2,3]));
console.log([4, 25, 64], ":", SquareEachArrayValue([2,5,8]));
console.log("");



// STRINGS
// ============================================================================

function reverseString(str) {
  newstr = ""
  for (var idx = str.length-1; idx>=0; idx--) {
    newstr += str[idx];
  }
  return newstr
}
function isPalindrome(str) {
  return reverseString(str)==str;
}
function isPalindrome2(str) {
  for (var i=0; i< Math.floor(str.length/2); i++) {
    if (str[i] != str[str.length-1-i]) {
      return false;
    }
  }
  return true;
}

console.log("22. ");
test1 = "abba"
test2="rabbit"
console.log(true, ":", test1 + " (isPalindrome-strcopy) " + isPalindrome(test1))
console.log(false, ":", test2 + " (isPalindrome-strcopy) " + isPalindrome(test2))
console.log(true, ":", test1 + " (isPalindrome-inplace) " + isPalindrome2(test1))
console.log(false, ":", test2 + " (isPalindrome-inplace) " + isPalindrome2(test2))
console.log("");


console.log("23. ");
function SubString(str, start, length) {
  var retn = "";
  for (var i=start; i<start+length; i++) {
    retn += str[i];    
  }
  // console.log(retn);
  return retn;
}
function ChrString(count,char) {
  var retn = "";
  for (var i=0; i<count; i++) {
    retn += char;    
  }
  return retn;
}
function CensorString(str,word) {
  retn = "";
  repl = ChrString(word.length, "*");
  // console.log(repl);
  for (i=0; i<str.length; i++) {
    teststr = SubString(str,i,word.length);
    if (teststr == word) {
      // console.log(teststr);
      retn += repl;
      i += word.length-1;
    }
    else{
      retn += str[i];
      // console.log(retn);
    }
  }
  return retn;
}
var source_string = "day.yad.Sunday is the shortest day of the week.day.d";
var target_string = "day";
console.log(source_string, ":");
console.log(CensorString(source_string, target_string));
