function strStr(str, need) {
  for (let i = 0; i <= str.length - need.length; i++) {
    if (str.substring(i, i + need.length) === need) {
      return i
    }
  }

  return -1
}

console.log(strStr('sadbutsad', 'sad'))
