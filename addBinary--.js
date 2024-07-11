function addBinary(a, b) {
  let result = []
  let carry = 0
  let i = a.length - 1
  let j = b.length - 1

  while (i >= 0 || j >= 0) {
    let sum = carry
    if (i >= 0) {
      sum += parseInt(a[i])
      i--
    }
    if (j >= 0) {
      sum += parseInt(b[j])
      j--
    }

    result.push(sum % 2)
    carry = Math.floor(sum / 2)
  }

  if (carry !== 0) {
    result.push(carry)
  }

  return result.reverse().join('')
}

/* var addBinary = function(a, b) {
  var i = a.length - 1
  var j = b.length - 1
  var carry = 0
  var result = ""

  while(i >= 0 || j >= 0 || carry > 0){
      const digitA = i>=0 ? parseInt(a[i]) : 0
      const digitB = j>=0 ? parseInt(b[j]) : 0

      const sum = digitA + digitB + carry
      carry = Math.floor(sum / 2)
      result = (sum % 2) + result

      i--
      j--
  }
  return result
} */
