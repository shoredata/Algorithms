Predict the output for the following codes. Please do not run these cocdes directly in the console or JSbin, but do these manually without using a computer.  Knowing how to do these on paper is extremely important.  Once you've predicted the output for all the codes below, please run the codes on your console/jsBin, and compare your prediction with what actually happened.  If your prediction is different than computer's results, please make sure you really understand why the two are different and correct your understanding on how these codes work.

We want you to get into the habit of using a T-diagram and doing this on paper.  This will not only help you during whiteboard exercises but also make you a better troubleshooter and developer.  Do NOT skip this assignment please.

function a(x,y){
  return 5;
}
console.log(a(5,5))
function a(x,y){
    z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
b = a(2,2)
console.log(b);
console.log(a(6,8));
function a(x){
   z = [];
   z.push(x);
   z.pop();
   z.push(x);
   z.push(x);
   return z;
}
y = a(2);
y.push(5);
console.log(y);
function a(x){
   if(x[0] <x [1]) {
      return true;
   }
   else {
      return false;
   }
}
b = a([2,3,4,5])
console.log(b);
function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 0){
           x[i] = “Coding”
      }
  }
console.log(a([1,2,3,4]))
function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 5){
           x[i] = “Coding”
      }
      else if(x[i] < 0){
           x[i] = “Dojo”
      }
  }
console.log(a([5,7,-1,4]))
function a(x){
   if(x[0] > x[1]) {
    return x[1];
   }
   return 10;
}
b = a([5,10])
console.log(b);
function sum(x){
    sum = 0;
    for(var i=0; i<x.length; i++){
       sum = sum + x[i];
       console.log(sum);
    }
    return sum;
}
If you were not able to correctly predict the output of the codes above, you should re-do the algorithm app (please reset all the challenges) and spend up to 1 hour today.

Part 2
1) Analyze an array’s values and return the average of its values.

function printAverage(x){
   sum = 0;
   for (var idx=0; idx<x.length; idx++) {
     sum += x[idx];
   }
   return sum/x.length;
}
y = printAverage([1,2,3]);
console.log(y); // should log 2
2

y = printAverage([2,5,8]);
console.log(y); // should log 5
5


2) Create an array with all the odd integers between 1 and 255 (inclusive)

function returnOddArray(){
  var newarr = []
  for (var idx=1; idx<256; idx+=2) {
    newarr.push(idx);
  }
  return newarr;
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]
[1,3,5,...,253,255]


3) Square each value in a given array, returning that same array with changed values.
function squareValue(x){
  for (var idx=0; idx< x.length; idx++) {
    x[idx] *= x[idx];
  }
   return x;
}
y = squareValue([1,2,3]);
console.log(y); // should log [1,4,9]
[1,4,9]

y = squareValue([2,5,8]);
console.log(y); // should log [4,25,64]
[4,25,64]
