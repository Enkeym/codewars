/* function plusOne(dig) {
  let num = Number(dig.join(''))
  return num.toString().split('')
} */

/* function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++
      break // вместо return мы используем break
    }
    digits[i] = 0
  }
  if (digits[0] === 0) {
    digits.unshift(1)
  }
  return digits
} */

function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    let num = BigInt(digits.join(''))
    ++num
    return num.toString().split('').map(Number)
  }
}

//console.log(plusOne([1, 2, 3]))
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
