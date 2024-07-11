function romanToInt(num) {
  const numbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let total = 0

  for (let i = 0; i < num.length; i++) {
    const currNum = numbers[num[i]]
    const nextNum = numbers[num[i + 1]]

    if (nextNum && currNum < nextNum) {
      total -= currNum
    } else {
      total += currNum
    }
  }

  return total
}

//console.log(romanToInt('III'))
//console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
