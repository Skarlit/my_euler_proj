// main
var t = Date.now();

var dict = {
  1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
  11: 'eleven', 12: 'twevle', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
  20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
}

function num2Str(n) {
  if (n < 20) {
    return dict[n];
  } else if (n < 100) {
    return dict[n - (n % 10)] + (n % 10 > 0 ? num2Str(n % 10) : '');
  } else if (n < 1000) {
    return dict[parseInt(n / 100)] + 'hundred' + (n % 100 > 0 ? 'and' + num2Str(n % 100) : '');
  } else {
    return 'onethousand';
  }
}

var stringLen = 0;
for(var i = 1; i <= 1000; i++) {
  stringLen += num2Str(i).length;
}

console.log("string length is %s,  time %s ms", stringLen, Date.now() - t);
