var t = Date.now();

function sieve(start, estRange, primes) {
  for(var i = 2; i <= estRange; i++) {
    if (nonPrimes[i]) continue;
    primes.push(i);
    var j = 2;
    while(i * j <= estRange) {
      // console.log(i, i * j, start, estRange)
      nonPrimes[i * j] = true;
      j++;
    }
  }
}

var n = 10000;
var start = 2;
// https://en.wikipedia.org/wiki/Prime_number_theorem
// n prime ~ n * log(n)
var estRange = parseInt(n * Math.log(n) / Math.log(10));
var nonPrimes = {};
var primes = [];
while(primes.length <= n) {
  primes = [];
  sieve(start, estRange, primes);
  start = estRange;
  estRange = parseInt(estRange * 1.1);
}
console.log("%s-th prime is %s, time %s ms", n + 1, primes[n], Date.now() - t);
