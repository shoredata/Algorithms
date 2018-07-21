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
console.log(sum_squares(n1));


