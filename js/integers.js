// https://repl.it/@bearfish47x/Javascript-Algorithms-Integers-v1


function SumOfSquares(n, val=1, sum=0){
    if (n<=0)
        return sum;
    else
        n -= val^2;
        console.log(val, n, sum);
        sum += val^2;
        val += 1;
        return sum + SumOfSquares(n, val, sum);
}
var n1= 10;
console.log(n1, "SumOfSquares:", SumOfSquares(n1));
console.log();


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
console.log(10, true, "PrintPositiveUpToInteger:", PrintPositiveUpToInteger(10));
console.log(0, false, "PrintPositiveUpToInteger:", PrintPositiveUpToInteger(0));
console.log(-7, false, "PrintPositiveUpToInteger:", PrintPositiveUpToInteger(-7));
console.log("");


function PrintSumToInteger(x){
  sum = 0;
  for (var idx=0; idx<=x; idx++){
    sum+=idx;
    // console.log(idx + " " + sum);
  }
  return sum
}
console.log(255, 32640, "PrintSumToInteger:", PrintSumToInteger(255)); //32640
console.log("");
