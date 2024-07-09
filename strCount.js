function strCount(str, letter) {
  return str.split('').filter((str) => str === letter).length
}

/* function strCount(str, letter) {
  return str.split(letter).length - 1
} */

console.log(strCount('Hello', 'l'))
console.log(strCount('Hello', 'o'))
console.log(strCount('', 'z'))
