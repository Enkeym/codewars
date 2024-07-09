/* function longestCommonPrefix(...strs) {
  let prefix = ''
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i]

    for (j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return prefix
      }
    }
    prefix += char
  }

  return prefix
}
 */

function longestCommonPrefix(strs) {
  let ans = strs[0]

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(ans) !== 0) {
      ans = ans.slice(0, ans.length - 1)
      if (ans === '') {
        return ''
      }
    }
  }

  return ans
}

console.log(longestCommonPrefix('flower', 'flow', 'flight'))
