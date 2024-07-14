/* function mySqrt(x) {
  for (i = 0; i <= x; i++) {
    if (i * i === x) {
      return i
    }
    if ((i + 1) * (i + 1) > x) {
      return i
    }
  }
}

console.log(mySqrt(8)) */

function mySqrt(x) {
  if (x === 0 || x === 1) return x

  let left = 1
  let right = x
  let result = 0

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (mid * mid === x) {
      return mid
    } else if (mid * mid < x) {
      left = mid + 1
      result = mid
    } else {
      right = mid - 1
    }
  }

  return result
}

console.log(mySqrt(8))
