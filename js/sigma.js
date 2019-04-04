// Sigma - Implement function sigma(num) that given a number, returns the sum 
// of all positive integers up to number (inclusive).
//
// Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function Sigma(value) {
  if (value==0) { return 0; }
  else { return value + Sigma(value-1);}
}
console.log(Sigma(3));
console.log(Sigma(5));
//console.log(Sigma(6.5));
//console.log(Sigma(-1));
console.log(Sigma(10));

const sigma = (x, acum = 0) => Math.floor(parseInt(x)) > 0 ? sigma(Math.floor(parseInt(x)) - 1, Math.floor(parseInt(x)) + acum) : acum;
console.log("sigma 5: " + sigma(5)); // 15
console.log("sigma 6.5: " + sigma(6.5)); // 21
console.log("sigma 0: " + sigma(0)); // 0
console.log("sigma -1: " + sigma(-1)); // 0 but must test

// Bart@bart-i7-6000k MINGW64 ~/projects/algorithms/js (master)
// $ node sigma.js
// 6
// 15
// 55
// sigma 5: 15
// sigma 6.5: 21
// sigma 0: 0
// sigma -1: 0

