
function SumFrom1ToN(n) {
  return n * (n + 1) / 2;
}


function solver(n) {
  return 3 * SumFrom1ToN(Math.floor((n - 1) / 3)) +
  5 * SumFrom1ToN(Math.floor((n - 1) / 5)) -
  15 * SumFrom1ToN(Math.floor((n - 1) / 15))
}

console.log(solver(1000));
