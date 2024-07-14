function isPangram(string) {
  let alphabet = new Set('abcdefghijklmnopqrstuvwxyz')

  let sum = new Set()

  for (i of string) {
    if (alphabet.has(i.toLowerCase())) {
      sum.add(i.toLowerCase())
    }
  }
  return sum.size === alphabet.size
}

/* function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
} */

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
console.log(isPangram('This is not a pangram.'))
