// https://repl.it/@bearfish47x/Javascript-Algorithms-Arrays-v1

export default { 
  getLargestArrayElement,
  removeDuplicatesFromArray,
  pushFront,
  insertItemInArrayAtPosition,
  getArrayMin,
  getArrayMax,
  getArraySum,
  getArrayAverage,
  zipArrays,
  countGreater,
  replaceNegatives,
  removeArrayItemsInPlace,
  removeArrayItem,
  popFront,
  moveArrayForward,
  reverseArray,  
  repeatArraysItems,
  doubleEachArrayValue,
  squareEachArrayValue
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
      removeArrayItemsInPlace(arr, arrremove[i],arrremove[i]);
    }
    return arr;
}


export function pushFront(arr,val) {
    insertItemInArrayAtPosition(arr,0,val);
    return arr;
}


export function insertItemInArrayAtPosition(arr,index,val){
    arr.push(0);
    for (var idx=arr.length-1; idx>index; idx--) {
        arr[idx]=arr[idx-1];
    }
    arr[index] = val;
    return arr;
}


export function getArrayMin(x){
  if (x.length==0 || x == null) {
    return undefined;
  }  
  let min = x[0];
  for(var i=1; i<x.length; i++) {
    if (min > x[i]) {
      min = x[i];
    }
  }
  return min;
}
export function getArrayMax(x){
  if (x.length==0 || x == null) {
    return undefined;
  }  
  var max = x[0];
  for(var i=1; i<x.length; i++) {
    if (max < x[i]) {
      max = x[i];
    }
  }
  return max;
}
export function getArraySum(x){
  if (x.length==0 || x == null) {
    return undefined;
  }  
  var sum = 0;
  for(var i=0; i<x.length; i++) {
    sum += x[i];
  }
  return sum;
}
export function getArrayAverage(x){
  if (x.length==0 || x == null) {
    return undefined;
  }  
  let sum = 0;
  for (var idx=0; idx<x.length; idx++) {
    sum += x[idx];
  }
  return sum/x.length;
}


export function zipArrays(arr1, arr2) {
    var newobj = {};
    for (var i=0; i<arr1.length; i++) {
        newobj[arr1[i]] = arr2[i];
    }
    return newobj;
}


export function countGreater(arr, y) {
  var icount = 0;
  for (var idx =0; idx<arr.length; idx++) {
    if (arr[idx]>y) {
      icount++;
    }
  }
  return icount;
}


export function replaceNegatives(arr) {
  let newarr = [];
  for (let idx=0; idx<arr.length; idx++) {
    if (arr[idx]<0) {
      newarr.push(0);
    }
    else {
      newarr.push(arr[idx]);
    }
  }
  return newarr;
}



export function removeArrayItemsInPlace(arr, start, end) {
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


export function removeArrayItem(arr,index) {
    removeArrayItemsInPlace(arr, index, index);
    return arr;
}


export function popFront(arr) {
  if (arr.length==0 || arr == null) {
    return undefined;
  }
  let retn = arr[0];
  removeArrayItemsInPlace(arr, 0, 0);
  return retn;
}


export function moveArrayForward(arr) {
  if (arr.length==0) {
    return [];
  }
  if (arr == null) {
    return undefined;
  }
  let newarr = [];
  for (let idx=0; idx<arr.length-1; idx++) {
    newarr.push(arr[idx+1]);
  }
  newarr.push(0);
  return newarr;
}


export function reverseArray(arr) {
  for (var idx=0; idx<arr.length/2; idx++)
  {
    var temp = arr[idx];
    arr[idx] = arr[arr.length-idx-1];
    arr[arr.length-idx-1] = temp;
  }
  return arr;
}


export function repeatArraysItems(arr) {
  var newarr = [];
  for (var idx=0; idx<arr.length; idx++) {
    newarr.push(arr[idx]);
    newarr.push(arr[idx]);
  }
  return newarr;
}


export function doubleEachArrayValue(arr){
  for (var idx=0; idx< arr.length; idx++) {
    arr[idx] *= 2;
  }
   return arr;
}


export function squareEachArrayValue(arr){
  for (var idx=0; idx< arr.length; idx++) {
    arr[idx] *= arr[idx];
  }
   return arr;
}
