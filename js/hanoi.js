function hanoi(disc, src, dst, aux=[]) {
  if (disc === 0) {
    // var disk = src.pop();
    // dst.push(disk);
  } else {
    hanoi(disc-1, src, aux, dst);
    var disk = src.pop();
    dst.push(disk);
    hanoi(disc-1, aux, dst, src);
  }
}
var ar1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], ar2=[], ar3=[];
console.log(ar1, ar2, ar3);
hanoi(10, ar1, ar2, ar3);
console.log(ar1, ar2, ar3);