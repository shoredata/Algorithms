// https://repl.it/@bearfish47x/Javascript-Algorithms-Arrays-v1

// module.exports = {
//   function getLargestArrayElement(),
//   function removeDuplicatesFromArray(),
//   function pushFront()
// }


export default { 
  getLargestArrayElement,
  removeDuplicatesFromArray,

  pushFront,
  InsertItemInArrayAtPosition,
  GetArrayMin,
  GetArrayMax,
  GetArraySum,
  GetArrayAverage,
  ZipArrays,
  
  CountAndPrintGreater,
  ReplaceNegatives,
  RemoveArrayItemsInPlace,
  RemoveArrayItem,
  PopFront,
  MoveArrayForward,
  ReverseArray,  
  RepeatArraysItemsInPlace,
  DoubleEachArrayValue,
  SquareEachArrayValue

}

// console.log("ARRAYS ==============");
export function getLargestArrayElement(x){
  if (x.length==0 || x == null) {
    return undefined;
  }
  var max = x[0];
  for(var i=1; i<x.length; i++) {
    if (max < x[i]){
      max = x[i];
    }
  }
  return max;
}
// console.log(30, "GetLargestArrayElement:", GetLargestArrayElement([1,30,5,7]));
// console.log("");


export function removeDuplicatesFromArray(arr) {
    if (arr.length==0 || arr==null) {
      return [];
    }
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
// console.log([1,7,30,5], "RemoveDuplicatesFromArray:", RemoveDuplicatesFromArray([1,7, 30,5,7,1,7]));
// console.log([1,7], "RemoveDuplicatesFromArray:", RemoveDuplicatesFromArray([1,7]));
// console.log([1,7], "RemoveDuplicatesFromArray:", RemoveDuplicatesFromArray([1,7,1,1,1,]));
// console.log([], "RemoveDuplicatesFromArray:", RemoveDuplicatesFromArray([]));
// console.log("");


export function pushFront(arr,val) {
    InsertItemInArrayAtPosition(arr,0,val);
    return arr;
}
// console.log([1,30,5,7], "PushFront:", PushFront([30,5,7], 1));
// console.log("");


export function InsertItemInArrayAtPosition(arr,index,val){
    arr.push(0);
    for (var idx=arr.length-1; idx>index; idx--) {
        arr[idx]=arr[idx-1];
    }
    arr[index] = val;
    return arr;
}
// console.log([0,1,2,30,5,7], "InsertItemInArrayAtPosition:", InsertItemInArrayAtPosition([0,1,30,5,7],2,2));
// console.log("");

export function GetArrayMin(x){
    if (x.length==0) {
        return 0;
    }
    let min = x[0];
    for(var i=1; i<x.length; i++) {
        if (min > x[i]) {
            min = x[i];
        }
    }
    return min;
}
// console.log(1, "GetArrayMin:", GetArrayMin([1,2,3]));
// console.log("");


export function GetArrayMax(x){
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
// console.log(3, "GetArrayMax:", GetArrayMax([1,2,3]));
// console.log("");


export function GetArraySum(x){
  var sum = 0;
  for(var i=0; i<x.length; i++) {
    sum += x[i];
  }
  return sum;
}
// console.log(6, "GetArraySum:", GetArraySum([1,2,3]));
// console.log("");


export function GetArrayAverage(x){
    if (x.length==0) {
        return 0;
    }
    sum = 0;
    for (var idx=0; idx<x.length; idx++) {
        sum += x[idx];
    }
    return sum/x.length;
}
// console.log(2, "GetArrayAverage:", GetArrayAverage([1,2,3]));
// console.log(5,"GetArrayAverage:",  GetArrayAverage([2,5,8]));
// console.log("");


export function ZipArrays(arr1, arr2) {
    var newobj = {};
    for (var i=0; i<arr1.length; i++) {
        newobj[arr1[i]] = arr2[i];
    }
    return newobj;
}
// testa = ['fruit', 'veg', 'meat'];
// testb = ['apple', 'tomato', 'beef'];
// console.log("ZipArrays:", testa + " + " + testb + ":" ) + console.dir(ZipArrays(testa,testb));
// console.log("");


export function CountAndPrintGreater(arr, y) {
  var icount = 0;
  for (var idx =0; idx<arr.length; idx++) {
    if (arr[idx]>y) {
      icount++;
    }
  }
  return icount;
}
// console.log(3, "CountAndPrintGreater:", CountAndPrintGreater([1,2,3,4,5,6],3));
// console.log("");


export function ReplaceNegatives(arr) {
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
// console.log([1,2,0,0,5],"ReplaceNegatives:", ReplaceNegatives( [1,2,-3,-5,5]));
// console.log("");


export function RemoveArrayItemsInPlace(arr, start, end) {
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
// console.log([30], "RemoveArrayItemsInPlace:", RemoveArrayItemsInPlace([20,30],0,0));
// console.log([20], "RemoveArrayItemsInPlace:", RemoveArrayItemsInPlace([20,30],1,1));
// console.log([], "RemoveArrayItemsInPlace:", RemoveArrayItemsInPlace([20,30],0,1));
// console.log([20,30,70], "RemoveArrayItemsInPlace:", RemoveArrayItemsInPlace([20,30,40,50,60,70],2,4));
// console.log([20,30,40], "RemoveArrayItemsInPlace:", RemoveArrayItemsInPlace([20,30,40,70],3,3));
// console.log("");


export function RemoveArrayItem(arr,index) {
    RemoveArrayItemsInPlace(arr, index, index);
    return arr;
}
// console.log([1,30,5,7], 1, "RemoveArrayItem:", RemoveArrayItem([1,9,30,5,7], 1));
// console.log("");


export function PopFront(arr) {
    RemoveArrayItemsInPlace(arr, 0, 0);
    return arr;
}
// console.log([1,30,5,7], "PopFront:", PopFront([0,1,30,5,7]));
// console.log("");


export function MoveArrayForward(arr) {
  var newarr = [];
  for (var idx=0; idx<arr.length-1; idx++) {
    newarr.push(arr[idx+1]);
  }
  newarr.push(0);
  return newarr;
}
// console.log([2,3,0], "MoveArrayForward:", MoveArrayForward([1,2,3]));
// console.log("");


export function ReverseArray(arr) {
  for (var idx=0; idx<arr.length/2; idx++)
  {
    var temp = arr[idx];
    arr[idx] = arr[arr.length-idx-1];
    arr[arr.length-idx-1] = temp;
  }
  return arr;
}
// console.log([3,2,1], "ReverseArray:", ReverseArray([1,2,3]));
// console.log("");


export function RepeatArraysItemsInPlace(arr) {
  var newarr = [];
  for (var idx=0; idx<arr.length; idx++) {
    newarr.push(arr[idx]);
    newarr.push(arr[idx]);
  }
  return newarr;
}
// console.log(['a','a',1,1,"Bob","Bob"], "RepeatArraysItemsInPlace:", RepeatArraysItemsInPlace(['a',1,"Bob"])); //['a','a',1,1,"Bob","Bob"]
// console.log("");


export function DoubleEachArrayValue(arr){
  for (var idx=0; idx< arr.length; idx++) {
    arr[idx] *= 2;
  }
   return arr;
}
// console.log([2,4,6], "DoubleEachArrayValue:", DoubleEachArrayValue([1,2,3]));
// console.log([4,10,16], "DoubleEachArrayValue:", DoubleEachArrayValue([2,5,8]));
// console.log("");


export function SquareEachArrayValue(arr){
  for (var idx=0; idx< arr.length; idx++) {
    arr[idx] *= arr[idx];
  }
   return arr;
}
// console.log([1,4,9], "SquareEachArrayValue:", SquareEachArrayValue([1,2,3]));
// console.log([4, 25, 64], "SquareEachArrayValue:", SquareEachArrayValue([2,5,8]));
// console.log("");
