// preprocessing
var fs = require('fs')
var buf = fs.readFileSync('./data');
var ary = buf.toString().split(/\r?\n/)
ary.pop();
var t = Date.now();

var digits = new Array(52);
var numberDigits = 50;
function add(col, carry, digitPos) {
  // runs out of digits,  simply add on the carry
  if (col < 0) return carry + digits.join('');

  // else recurse
  var sum = 0;
  for(var i = 0; i < ary.length; i++)
    sum += parseInt(ary[i][col]);

  sum += carry;
  digits[digits.length - digitPos - 1] = sum % 10;
  return add(col - 1, parseInt(sum / 10), digitPos + 1);
}

console.log("First 10 digits are %s, time %s ms", add(numberDigits - 1, 0, 0), Date.now() - t);
