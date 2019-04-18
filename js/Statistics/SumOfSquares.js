// The sum of squares is the sum of the square of variation, where variation is 
// defined as the spread between each individual value and the mean. 

// To determine the sum of squares, the distance between each data point and 
// the line of best fit is squared and then summed up

export default function sumOfSquares(array) {
  var sum = 0, i = array.length;  
  while (i--) sum += Math.pow(array[i], 2);  
  return sum;
}
