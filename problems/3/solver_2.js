// Around 60ms

var t = Date.now();
var n = 600851475143;
var dict = {};

var maxFac = null;
var limit = parseInt(Math.sqrt(n));
for (p = 2; p < limit; p++) {
  if (dict[p]) continue;
  if (n % p == 0) maxFac = p;
  for(var i = 2; ; i++) {
     if (p * i > limit) break;
     dict[p * i] = true;
  }
}

console.log("prime: %s, time: %s ms", maxFac, Date.now() - t);
