function getSum(a, b) {
  let sum = 0
  if (a > b) {
    [a, b] = [b, a]
  }
  for (let i = a; i <= b; i++) {
    sum += i
  }
  return sum
}

console.log(getSum(1, 0))
console.log(getSum(1, 2))
console.log(getSum(0, 1))
console.log(getSum(1, 1))
console.log(getSum(-1, 0))
console.log(getSum(-1, 2))
