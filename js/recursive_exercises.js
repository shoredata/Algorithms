const factorial = (x , acum = 1) => Math.floor(parseInt(x))  ? factorial(Math.floor(parseInt(x))  - 1, Math.floor(parseInt(x))  * acum) : acum;
console.log("factorial 5: " + factorial(5)); // 120
console.log("factorial 0: " + factorial(0)); // 1
console.log("factorial 6.5: " + factorial(6.5)); // 720

const sigma = (x, acum = 0) => Math.floor(parseInt(x)) > 0 ? sigma(Math.floor(parseInt(x)) - 1, Math.floor(parseInt(x)) + acum) : acum;
console.log("sigma 5: " + sigma(5)); // 15
console.log("sigma 6.5: " + sigma(6.5)); // 21
console.log("sigma 0: " + sigma(0)); // 0
console.log("sigma -1: " + sigma(-1)); // 0 but must test

function floodfill(array, x, y, old_color, new_color){
	// console.log(x, y, array.length);
	if (x>=0 && x < array.length && y >= 0 && y < array[x].length) {
		if (y >= 0 && y < array[x].length) {
			// console.log( array[x][y]);
			if (array[x][y] != old_color) {
				return;
			}
			array[x][y]=new_color;
			floodfill(array, x-1, y, old_color, new_color);
			floodfill(array, x+1, y, old_color, new_color);
			floodfill(array, x, y-1, old_color, new_color);
			floodfill(array, x, y+1, old_color, new_color);
			return array;
		}
	}
}
var ar1 = [	[3,2,3,4,3],
			[2,3,3,4,0],
			[7,3,3,5,3],
			[6,5,3,4,1],
			[1,2,3,3,3] ];
console.log(ar1, floodfill(ar1, 2, 2, 3, 1));
