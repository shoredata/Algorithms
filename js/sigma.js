Sigma - Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).
Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function Sigma(value) {
  if (value==0) { return 0; }
  else { return value + Sigma(value-1);}
}
console.log(Sigma(3));
console.log(Sigma(5));
console.log(Sigma(10));
6
15
55
