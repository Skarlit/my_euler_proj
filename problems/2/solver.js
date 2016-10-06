var fibGenerator = (function() {
  var t1 = 0;
  var t2 = 1;
  return function() {
    var t = t2 + t1;
    t1 = t2;
    t2 = t;
    return t;
  }
})();

var acc = 0;
do {
  var t = fibGenerator();
  if (t % 2 == 0) acc += t;
} while (t <= 4000000);

console.log(acc);
