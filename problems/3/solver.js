// Bad implementation. See Solver 2

// build array link list;
function cursorList(size) {
  this.list = new Array(limit + 2);
  this.cursor = 2;
  for(var i = 0; i < this.list.length; i++) {
    this.list[i] = i + 1; // point to next;
  }
}
cursorList.prototype = {
  getCurrentPos: function() {return this.cursor},
  getNext: function() {return this.list[this.cursor]},
  setCursor: function(pos) { this.cursor = pos},
  killNext: function() {this.list[this.cursor] = this.list[this.list[this.cursor]]},
  resetCursor: function() { this.cursor = 2},
  next: function() { this.cursor = this.list[this.cursor]},
  ended: function() { return this.cursor == (this.list.length - 1)}
}

var t = Date.now();
var n = 600851475143;
var limit = parseInt(Math.sqrt(n));
var list = new cursorList(limit);
// Sieving
var currentFac = 2;
do {
  list.setCursor(currentFac);
  while(!list.ended()) {
    while (list.getNext() % currentFac == 0) {
      list.killNext();
    }
    list.next();
  }
  list.setCursor(currentFac);
  currentFac = list.getNext();
  // console.log(currentFac);
} while (currentFac < limit);

// console.log(list.list.join(','));

// Find largest prime factor
var maxFac = null;
list.resetCursor();
while(!list.ended()) {
  if (n % list.getNext() == 0) maxFac = list.getNext();
  list.next();
}
console.log(maxFac);
console.log(Date.now() - t);
