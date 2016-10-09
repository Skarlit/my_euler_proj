var t = Date.now();
var range = 2000000;
var primeSum = 0;
var nonPrimes = {};
var current = 2;
for(var i = current; i < range; i++) {
  if (nonPrimes[i]) continue;
  primeSum += i;
  var fac = 2;
  while (fac * i < range) {
    nonPrimes[fac * i] = true;
    fac++;
  }
}

console.log("sum is %s, time %s ms", primeSum, Date.now() - t);
