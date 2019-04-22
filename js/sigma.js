// sigma - Implement function sigma(num) that given a number, returns the sum 
// of all positive integers up to number (inclusive).
//
// Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

// The sigma is only defined for zero and non-negative integers.

export function sigma(n) {
  if (n < 0) { return undefined; }
  if (!Number.isInteger(n)) { return undefined; }
  if (n==0) { return 0; }
  else { return n + sigma(n-1);}
}
