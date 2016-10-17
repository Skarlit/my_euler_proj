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
function diagGenPositive(startI, startJ, mat) {
  var i = startI;
  var j = startJ;
  var iLim = mat.length;
  return function() {
    if (j < 0 || i >= iLim) return null;
    var p = mat[i][j];
    i++;
    j--;
    return p;  // return null when it reaches the end
  }
}
function diagGenNegative(startI, startJ, mat) {
  var i = startI;
  var j = startJ;
  var iLim = mat.length;
  var jLim = mat[0].length;
  return function() {
    if (i >= iLim || j >= jLim) return null;
    var p = mat[i][j];
    i++;
    j++;
    return p;  // return null when it reaches the end
  }
}
function hGen(row, mat) {
  var j = 0;
  var jLim = mat[0].length;
  return function() {
    if (j >= jLim) return null;
    var p = mat[row][j];
    j++;
    return p;  // return null when it reaches the end
  }
}
function vGen(col, mat) {
  var i = 0;
  var iLim = mat.length;
  return function() {
    if (i >= iLim) return null;
    var p = mat[i][col];
    i++;
    return p;  // return null when it reaches the end
  }
}

var maxProd = 0;
// Scan each line/diag provided by a generator
function scan(generator) {
  var stack = new Array(4);
  var headPtr = 0;
  var tailPtr = 0;
  var queueSize = 0;
  var currentProd = 1;
  var n = generator();
  while(n != null) {
    if (n == 0) {
      queueSize = 0;
      stack = new Array(4);
      currentProd = 1;
      headPtr = 0;
      tailPtr = 0;
    } else {
      // If queue size is already 4, bump tail up
      if (queueSize == 4) {
        currentProd /= stack[tailPtr];
        queueSize--;
        tailPtr = (tailPtr + 1) % 4;
      }
      // push new number to queue, bump head up
      currentProd *= n;
      stack[headPtr] = n;
      headPtr = (headPtr + 1) % 4;
      queueSize++;
      if (queueSize == 4) {
        if (currentProd > maxProd) {
          maxProd = currentProd;
          console.log(currentProd, stack);
        }
      }
    }
    n = generator();
  }
}

// Create all generators and scan them
for(var i = 0; i < mat.length; i++) {
  scan(hGen(i, mat));
  scan(diagGenPositive(i, mat[0].length -1, mat));
  scan(diagGenNegative(i, 0, mat));
}
for(var j = 0; j < mat[0].length; j++) {
  scan(vGen(0, mat));
  scan(diagGenPositive(0, j, mat));
  scan(diagGenNegative(0, j, mat));
}

console.log("max prod is %s, time %s ms", maxProd, Date.now() - t);
