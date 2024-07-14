function duplicateCount(text) {
  let charCount = {}
  text = text.toLowerCase()

  // Count occurrences of each character
  for (let char of text) {
    if (charCount[char]) {
      charCount[char]++
    } else {
      charCount[char] = 1
    }
  }

  // Count characters with more than one occurrence
  let duplicate = 0
  for (let count in charCount) {
    if (charCount[count] > 1) {
      duplicate++
    }
  }

  return duplicate
}

/* function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
} */

console.log(duplicateCount('abcde'))
console.log(duplicateCount('aabbcde'))
//console.log(duplicateCount('aabBcde'))
//duplicateCount('Indivisibility')
//duplicateCount('Indivisibilities')
