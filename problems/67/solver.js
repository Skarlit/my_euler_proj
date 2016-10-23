// preprocessing
var fs = require('fs')
var buf = fs.readFileSync('./data');
var ary = buf.toString().split(/\n\r?/);
ary.pop();
ary = ary.map(function(el) { return el.split(' ').map(
  function(e) { return {val: parseInt(e)} }
)});

// main
var t = Date.now();
ary[0][0].maxSum = ary[0][0].val;
for(var i = 1; i < ary.length; i++) {
  ary[i][0].maxSum = ary[i][0].val + ary[i - 1][0].maxSum;
}

for(var i = 1; i < ary.length; i++) {
  var row = ary[i];
  for(var j = 1; j < row.length; j++) {
    if (j == row.length - 1) {
      ary[i][j].maxSum = ary[i - 1][j - 1].maxSum + ary[i][j].val;
    } else {
      ary[i][j].maxSum = Math.max(ary[i - 1][j - 1].maxSum, ary[i - 1][j].maxSum) + ary[i][j].val;
    }
  }
}

var maxSum = Math.max.apply(null, ary[ary.length - 1].map(function(e) {return e.maxSum}));
console.log("Max sum is %s,  time %s ms", maxSum, Date.now() - t);
