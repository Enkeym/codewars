function ranks(a) {
  let indexArr = [...a].map((val, idx) => [val, idx])

  indexArr.sort((a, b) => b[0] - a[0])

  let ranks = [...a].fill(0)
  let currRank = 1

  for (i = 0; i < indexArr.length; i++) {
    if (i > 0 && indexArr[i][0] === indexArr[i - 1][0]) {
      ranks[indexArr[i][1]] = currRank
    } else {
      currRank = i + 1
      ranks[indexArr[i][1]] = currRank
    }
  }

  return ranks
}

/* function ranks(a) {
  var s = a.slice().sort(function (a, b) {
    return b - a
  })
  return a.map(function (v) {
    return s.indexOf(v) + 1
  })
} */

//console.log(ranks([9, 3, 6, 10]))
//console.log(ranks([3, 3, 3, 3, 3, 5, 1]))
console.log(ranks([5, 2, 3, 5, 5, 4, 9, 8, 0])) //3, 8, 7, 3, 3, 6, 1, 2, 9
