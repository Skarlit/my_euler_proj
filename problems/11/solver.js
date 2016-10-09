// preprocessing
var fs = require('fs')
var buf = fs.readFileSync('./data');
var ary = buf.toString().replace(/\r?\n/, ' ').split(/\s+/);
ary.pop();
var mat = new Array(20);
for(var i = 0; i < 20; i++) {
  mat[i] = new Array(20);
  for(var j = 0; j < 20; j++) {
    mat[i][j] = parseInt(ary[i * 20 + j].trim());
  }
}

// main
var t = Date.now();

var queue = [];

function diagGenOne(startI, startJ, mat) {
  var currentI = startI;
  var currentJ = startJ;
  return function() {
    var p = mat[i][j];
    i++;
    j--;
    return p;  // return null when it reaches the end
  }
}

function diagGenTwo(startI, startJ, mat) {
  var currentI = startI;
  var currentJ = startJ;
  return function() {
    var p = mat[i][j];
    i++;
    j++;
    return p;  // return null when it reaches the end
  }
}

var maxProd = 0;
var stack = [];
var headPtr = 0;

var nextNum;

console.log("sum is %s, time %s ms", null, Date.now() - t);
