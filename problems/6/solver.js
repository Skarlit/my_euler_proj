var t = Date.now();

var sum = 0;
for(var i = 1; i <= 99; i++) {
  for(var j = i + 1; j <= 100; j++) {
    sum += i * j;
  }
}
sum *= 2;
console.log("Sum is %s, time %s ms", sum, Date.now() - t);
