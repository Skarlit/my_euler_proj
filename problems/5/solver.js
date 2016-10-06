var t = Date.now();

var primeFac = {}; // prime: max_power

var nonPrimes = {0: true, 1: true};

var primes = [];

for(var i = 2; i <= 20; i++) {
  if (nonPrimes[i]) continue;
  primes.push(i);
  primeFac[i] = 1;
  var j = 2;
  while(i * j <= 20) {
    nonPrimes[i * j] = true;
    j++;
  }
}

// For each num, find the prime factors and the power of the factor.
// We only need to get the max power of each prime factor from 2 to 20
for(var num = 2; num <= 20; num++) {
  for(var i = 0; i < primes.length; i++) {
    if (num < primes[i]) continue;
    var p = primes[i];
    var divisionCount = 0;
    var dup = num;
    while (dup % p== 0) {
      dup /= p;
      divisionCount++;
    }
    if (primeFac[p] < divisionCount) primeFac[p] = divisionCount;
  }
}

var lcm = 1;
for(var prime in primeFac) {
  lcm *= Math.pow(parseInt(prime), primeFac[prime]);
}

console.log("LCM is %s, time %s ms", lcm, Date.now() - t);
