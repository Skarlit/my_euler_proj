// main
var t = Date.now();
var facCache = {0: 1};
var prod = 1;
for(var i = 1; i < 10; i++) {
  prod *= i;
  facCache[i] = prod;
}

// to Find bound N, we use newton method
function f(n) {
  return Math.pow(10, n) - facCache[9] * n;
}

function df(n) {
  return Math.pow(10, n) * Math.log(10) / Math.log(Math.E) - facCache[9];
}
var x0 = 10;
var x1 = x0 - f(x0) / df(x0);
while (Math.abs(x0 - x1) > 0.001) {
  x0 = x1;
  x1 = x0 - f(x0) / df(x0);
};

// After we found N, for n > N, the factorial sum will always be smaller.
// So we can just loop from 3 to 10^N
var N = Math.ceil(x1);
var limit = Math.pow(10, N);
var sum = 0;
for(var i = 3; i < limit * 2; i++) {
  var n = i;
  var curiousSum = 0;
  while (n > 0) {
    curiousSum += facCache[n % 10];
    n = parseInt(n / 10);
  }
  if (curiousSum == i) {
    sum += i;
  }
}

console.log("sum of curious number is %s,  time %s ms", sum, Date.now() - t);
