/* function lengthOfLastWord(s) {
  let match = s.match(/\b\w+\b(?=\s*$)/)
  return match ? match[0].length : 0
} */

function lengthOfLastWord(s) {
  let noSpace = s.trim()

  let arrayOfLetters = noSpace.split(' ')

  let finalWord = arrayOfLetters.pop()

  return finalWord.length
}

console.log(lengthOfLastWord('Hello World'))
