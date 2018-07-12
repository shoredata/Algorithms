// from here:
// https://stackoverflow.com/questions/17445231/js-how-to-find-the-greatest-common-divisor

function greatest_common_factor(a, b) {
    console.log(a,b);
    if (b) {
        return greatest_common_factor(b, a % b);
    } else {
    	console.log(a);
        return Math.abs(a);
    }
}

function gcd(a,b) {
	greatest_common_factor(parseInt(a), parseInt(b));
}

console.log(5, 80, greatest_common_factor(5, 80));
console.log(3, 17, greatest_common_factor(3, 17));
