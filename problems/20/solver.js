// main
var t = Date.now();

function many2ManyMul(aryA, aryB) {
  
}

function one2ManyDigitMul(digit, array) {

}

function mergeSum(baseRow, row, rowOffset) {
  var carry = 0;
  for(var i = 0; ; i++) {
    if (i + rowOffset < baseRow.length) {
      var sum = baseRow[i + rowOffset] + row[i] + carry;
      baseRow[i + rowOffset] = sum % 10;
      carry = parseInt(sum / 10);
    } else if (i < row.length) {
      var sum = row[i] + carry;
      baseRow.push(sum % 10);
      carry = parseInt(sum / 10);
    } else if (carry > 0) {
      baseRow.push(parseInt(carry / 10));
    } else {
      return baseRow;
    }
  }
}
console.log(mergeSum([8,3,6,8], [9, 2, 3, 6], 1))

console.log("2^1000 digit sum is %s,  time %s ms", Date.now() - t);
