// main
var t = Date.now();

function mul2(numAry) {
  var currentIdx = 0;
  var carry = 0;
  while (currentIdx < numAry.length) {
    var prod = numAry[currentIdx] * 2 + carry;
    numAry[currentIdx] = prod % 10;
    carry = parseInt(prod / 10);
    currentIdx++;
  }
  if (carry > 0) numAry.push(carry);
  return numAry;
}

var ary = [2];
for(var i = 1; i < 1000; i++) {
  mul2(ary);
}

var digitSum = 0;
for(var i = 0; i < ary.length; i++) {
  digitSum += ary[i];
}

console.log("2^1000 digit sum is %s,  time %s ms", digitSum, Date.now() - t);
