export default function floodFill(array, x, y, old_color, new_color){
  // console.log(array, x, y, array.length);
  if (array.length <= 1) {
    return array;
  }
  else {
    if (x>=0 && x < array.length && y >= 0 && y < array[x].length) {
      if (y >= 0 && y < array[x].length) {
        // console.log( array[x][y]);
        if (array[x][y] != old_color) {
          return;
        }
        array[x][y]=new_color;
        floodFill(array, x-1, y, old_color, new_color);
        floodFill(array, x+1, y, old_color, new_color);
        floodFill(array, x, y-1, old_color, new_color);
        floodFill(array, x, y+1, old_color, new_color);
        return array;
      }
    }
  }
}
// var ar1 = [ [3,2,3,4,3],
//             [2,3,3,4,0],
//             [7,3,3,5,3],
//             [6,5,3,4,1],
//             [1,2,3,3,3] ];
// console.log(ar1);
// console.log();
// console.log(floodfill(ar1, 2, 2, 3, 1));

// Bart@bart-i7-6000k MINGW64 ~/projects/algorithms/js (master)
// $ node flood_fill.js
// [ [ 3, 2, 3, 4, 3 ],
//   [ 2, 3, 3, 4, 0 ],
//   [ 7, 3, 3, 5, 3 ],
//   [ 6, 5, 3, 4, 1 ],
//   [ 1, 2, 3, 3, 3 ] ]

// [ [ 3, 2, 1, 4, 3 ],
//   [ 2, 1, 1, 4, 0 ],
//   [ 7, 1, 1, 5, 3 ],
//   [ 6, 5, 1, 4, 1 ],
//   [ 1, 2, 1, 1, 1 ] ]

