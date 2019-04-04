// The sum of squares is the sum of the square of variation, where variation is 
// defined as the spread between each individual value and the mean. 

// To determine the sum of squares, the distance between each data point and 
// the line of best fit is squared and then summed up

function sum_squares(n, val=1, sum=0){
    if (n<=0)
        return sum;
    else
        n -= val^2;
        console.log(val, n, sum);
        sum += val^2;
        val += 1;
        return sum + sum_squares(n, val, sum);
}
var n1= 10;
console.log(10, "sum_squares:", sum_squares(10));

// Bart@bart-i7-6000k MINGW64 ~/projects/algorithms/js (master)
// $ node sum_of_squares.js
// 1 7 0
// 2 7 3
// 3 6 3
// 4 0 4
// 10 'sum_squares:' 30

