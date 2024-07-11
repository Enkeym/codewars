/* function isValid(s) {
  let map = { '(': ')', '[': ']', '{': '}' }
  let stack = []

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (map[char]) {
      stack.push(char)
    } else {
      const last = stack.pop()
      if (map[last] !== char) {
        return false
      }
    }
  }

  return stack.length === 0
} */

function isValid(s) {
  let lastLength = -1
  while (lastLength !== s.length) {
    lastLength = s.length
    if (s.indexOf('{}') > -1) s = s.replace('{}', '')
    if (s.indexOf('()') > -1) s = s.replace('()', '')
    if (s.indexOf('[]') > -1) s = s.replace('[]', '')
    if (s.length === 0) return true
  }
  return false
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('{[]}'))
console.log(isValid('(]'))
console.log(isValid(']'))
console.log(isValid('{'))
