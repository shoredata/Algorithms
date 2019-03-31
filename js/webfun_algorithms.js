// INTEGERS
// ============================================================================

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
console.log(PrintPositiveUpToInteger(10));
console.log(PrintPositiveUpToInteger(0));
console.log(PrintPositiveUpToInteger(-7));


function PrintSumToInteger(x){
  sum = 0;
  for (var idx=0; idx<=x; idx++){
    sum+=idx;
    console.log(idx + " " + sum);
  }
  return sum
}
console.log(PrintSumToInteger(255)); //3285


// ARRAYS
// ============================================================================

function GetLargestArrayElement(x){
  var max = x[0];
  for(var i=1; i<x.length; i++) {
    if (max<x[i]){
      max = x[i];
    }
  }
  return max;
}
console.log(GetLargestArrayElement([1,30,5,7]));


//RemoveDup(arr)
  // *InPlace
  // *Time of O(n)
Function RemveDuplicatesFromArray(arr) {
    var setnodupes = new Set(); 
    for(var i=1; i<x.length; i++) {
        if (!setnodupes.has(x[i]) {
            setnodupes.Add(x[i]);
        }
        else {
            RemoveArrayItem(arr,i); //in place
        }
    }
    return arr;
}

function PushFront(arr,val) {
    InsertItemInArrayAtPosition(arr,0,val);
}
function RemoveArrayItem(arr,index) {
    RemoveArrayItemsInPlace(arr, index, 1);
}
function PopFront(arr) {
    RemoveArrayItemsInPlace(arr, 1, 1);
}
function InsertItemInArrayAtPosition(arr,index,val){
    arr.push(0);
    for (var idx=x.length-1; idx>index; idx--) {
        arr[idx]=arr[idx-1];
    }
    arr[index] = val;
}


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
console.log(GetArrayMin([1,2,3]));

function GetArrayMax(x){
    if (x.length==0) {
        return 0;
    }
    maxs = x[0];
    for(var i=1; i<x.length; i++) {
        if (max < x[i]) {
            max = x[i];
        }
    }
    return max;
}
console.log(GetArrayMax([1,2,3]));

function GetArraySum(x){
  sum = 0;
  for(var i=0; i<x.length; i++) {
    sum += x[i];
  }
  return sum;
}
console.log(GetArraySum([1,2,3]));

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
console.log(GetArrayAverage([1,2,3]));
console.log(GetArrayAverage([2,5,8]));


function ZipArrays(arr1, arr2) {
    var newobj = {};
    for (var i=0; i<arr1.length; i++) {
        newobj[arr1[i]] = arr2[i];
    }
    return newobj;
}
testa = ['fruit', 'veg', 'meat']
testb = ['apple', 'tomato', 'beef']
console.log(testa + " + " + testb + " ==> ")
console.dir(ZipArrays(testa,testb))


function CountAndPrintGreater(arr, y) {
  var icount = 0;
  for (var idx =0; idx< arr.length; idx++) {
    if (arr[idx]>y) {
      icount++;
    }
  }
  console.log(icount);
}


function ReplaceNegatives(arr) {
  newarr = [];
  for (idx=0; idx<arr.length; idx++) {
    if (arr<0) {
      newarr.push(0);
    }
    else {
      newarr.push(arr[idx]);
    }
  }
  return newarr;
}
console.log(replaceNegatives( [1,2,-3,-5,5])); // [1,2,0,0,5]


function RemoveArrayValuesInPlace(arr, start, end) {
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
console.log(RemoveArrayValuesInPlace([20,30,40,50,60,70],2,4)); //[20,30,70]


function MoveArrayForward(arr) {
  var newarr = [];
  for (var idx=0; idx<arr.length-1; idx++) {
    newarr.push(arr[idx+1]);
  }
  newarr.push(0);
  return newarr;
}
console.log(MoveArrayForward([1,2,3])); //[2,3,0]


function ReverseArray(arr) {
  var newarr = arr.copy();
  for (var idx=0; idx<arr.length/2; idx++)
  {
    var temp = newarr[idx];
    newarr[idx] = newarr[newarr.length-idx];
    newarr[newarr.length-idx] = temp;
  }
  return newarr;
}
console.log(ReverseArray([1,2,3])); //[3,2,1]


//DoubleUp(arr)
//a. repeat in place, below
//b. mult each by 2
//c. square

//a.
function RepeatArraysItemsInPlace(arr) {
  var newarr = [];
  for (var idx=0; idx<arr.length; idx++) {
    newarr.push(arr[idx]);
    newarr.push(arr[idx]);
  }
  return newarr;
}
console.log(RepeatArraysItemsInPlace(['a',1,"Bob"])); //['a','a',1,1,"Bob","Bob"]

//b. 
function DoubleEachArrayValue(arr){
  for (var idx=0; idx< arr.length; idx++) {
    arr[idx] *= 2;
  }
   return arr;
}
console.log(DoubleEachArrayValue([1,2,3]));
console.log(DoubleEachArrayValue([2,5,8]));

//c.
function SquareEachArrayValue(arr){
  for (var idx=0; idx< arr.length; idx++) {
    arr[idx] *= arr[idx];
  }
   return arr;
}
console.log(SquareEachArrayValue([1,2,3]));
console.log(SquareEachArrayValue([2,5,8]));




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
test1 = "abba"
test2="rabbit"
console.log(test1 + " (strcopy)" + isPalindrome(test1))
console.log(test2 + " (strcopy)" + isPalindrome(test2))
console.log(test1 + " (inplace)" + isPalindrome2(test1))
console.log(test2 + " (inplace)" + isPalindrome2(test2))


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
console.log(source_string);
console.log(CensorString(source_string, target_string));
