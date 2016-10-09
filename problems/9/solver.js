var t = Date.now();
var prod;
for(var a = 0; a < Math.floor(1000 / 3); a++) {
  for(var c  = Math.floor(1000/ 3); c < 1000; c++) {
    if ((1000 - a)* (a + c) == 500000) {
      prod = a * c * (1000 - a - c);
      break;
    }
  }
}
console.log("abc is %s, time %s ms", prod, Date.now() - t);
