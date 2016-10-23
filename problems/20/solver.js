// main
var t = Date.now();

// long multiplication
function mul(a, b) {
  var c = new Array(a.length + b.length);
  for(var i = 0; i < c.length; i++) c[i] = 0;
  for(var i = 0; i < a.length; i++) {
    var carry = 0;
    for(var j = 0; j < b.length; j++) {
      c[i + j] += a[i] * b[j] + carry;
      carry = parseInt(c[i + j] / 10);
      c[i + j] = c[i + j] % 10;
    }
    c[i + b.length] += carry;
  }
  while(c[c.length - 1] == 0) c.pop();
  return c;
}

function numToAry(n) {
  var ary = [];
  while(n > 0) {
    ary.push(n % 10);
    n = parseInt(n / 10);
  }
  return ary;
}

var prod = [1];
for(var i = 2; i <= 100; i++) {
  prod = mul(prod, numToAry(i));
}

var sum = 0;
for(var i = 0; i < prod.length; i++) {
  sum += prod[i];
}

console.log("sum of digits of 100! is %s,  time %s ms", sum, Date.now() - t);
