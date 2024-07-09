/* function solution(str, ending) {
  return str.endsWith(ending)
}

console.log(solution('abc', 'bc')) // returns true
console.log(solution('abc', 'd')) // returns false
 */

//6kyu
/* function solution(str) {
  if (str === '') {
    return []
  }

  let newStr = str.replace(/(..)/g, '$1 ')

  if (str.length % 2) {
    newStr += '_'
  }

  return newStr.trim().split(' ')
} */

function solution(s) {
  return (s + '_').match(/.{2}/g) || []
}

console.log(solution(''))
console.log(solution('abc'))
console.log(solution('abcdef'))
