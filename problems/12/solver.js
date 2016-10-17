// main
var t = Date.now();

function divisorCount(n) {
  var count = 0;
  for(var i = 1; i * i <= n; i++) {
     if (n % i == 0) {  // check divisibility
        count += (i * i == n ? 1 : 2); // add divisor pair (i, n / i), discount if i == n / i
     }
  }
  return count;
}
// // estimate range
var i = 1;
var s = 1;
while(divisorCount(s) < 500) {
  i++;
  s+=i;
}

console.log("first tri num > 500 is the %s-th with value %s, time %s ms", i, s, Date.now() - t);
