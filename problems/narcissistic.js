function narcissistic(value) {
  let str = value.toString()
  let length = str.length
  let sum = str
    .split('')
    .map((s) => Math.pow(Number(s), length))
    .reduce((sum, current) => sum + current, 0)

  return sum == value
}

console.log(narcissistic(153))
console.log(narcissistic(1652))
console.log(narcissistic(9474))
