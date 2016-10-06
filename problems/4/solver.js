var t = Date.now();
function isPalindrome(p) {
  if (p < 10) return true;
  // extract digits
  var stack = [p % 10];
  while (p >= 10) {
    p = parseInt(p / 10);
    stack.push(p % 10);
  }
  // check palindrome
  for(var i = 0; i < stack.length / 2; i++) {
    if (stack[i] != stack[stack.length - 1 - i]) return false
  }
  return true;
}

var max = 0;
var lowerBound = 100;
var upperBound = 1000;
for(var i = lowerBound; i < upperBound; i++) {
  for(var j = i; j < upperBound; j++) {
     var p = i * j;
     if (isPalindrome(p) && p > max ) {
       max = p;
     }
  }
}
console.log("max %s, time %s ms", max, Date.now() - t);
