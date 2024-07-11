function dashatize(num) {
  let numStr = Math.abs(num).toString()
  let result = ''

  for (i = 0; i < numStr.length; i++) {
    if ((i > 0 && numStr[i] % 2 === 1) || numStr[i - 1] % 2 === 1) {
      result += '-'
    }
    result += numStr[i]
  }

  return result
}

/* function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "")
} */

/*  function dashatize(num) {
      return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
    };   */

console.log(dashatize(274))
console.log(dashatize(6815))
