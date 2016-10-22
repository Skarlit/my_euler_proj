// main
var t = Date.now();

// standard dynamic programming
var cache = {1: 1};
var longestSeq = 0;
var targetInt = null;
function getCollatSeq(n) {
  if (cache[n]) return cache[n];
  var seqNum = 1 + getCollatSeq(n % 2 == 0 ? n / 2 : (3 * n + 1));
  cache[n] = seqNum;
  if (seqNum > longestSeq) {
    longestSeq = seqNum;
    targetInt = n;
  }
  return seqNum;
}

for (var i = 1; i < 1000000; i++) {
  getCollatSeq(i);
}

console.log("%s has longest seq of %s,  time %s ms", targetInt, longestSeq, Date.now() - t);
