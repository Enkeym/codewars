/* function winner(deckSteve, deckJosh) {
  const rankMap = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  }

  let scoreSteve = 0
  let scoreJosh = 0

  let i = 0
  while (i < deckSteve.length && i < deckJosh.length) {
    let rankSteve = rankMap[deckSteve[i]]
    let rankJosh = rankMap[deckJosh[i]]

    if (rankSteve > rankJosh) {
      scoreSteve += 1
    } else if (rankJosh > rankSteve) {
      scoreJosh += 1
    }
    i += 1
  }

  if (scoreSteve > scoreJosh) {
    return `Steve wins ${scoreSteve} to ${scoreJosh}`
  } else if (scoreJosh > scoreSteve) {
    return `Josh wins ${scoreJosh} to ${scoreSteve}`
  } else {
    return 'Tie'
  }
} */

/* function winner(deckSteve, deckJosh) {
  let rank = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']

  let scoreSteve = 0
  let scoreJosh = 0

  for (i = 0; i < deckSteve.length; i++) {
    if (rank.indexOf(deckSteve[i]) > rank.indexOf(deckJosh[i])) {
      scoreSteve++
    } else if (rank.indexOf(deckJosh[i]) > rank.indexOf(deckSteve[i])) {
      scoreJosh++
    }
  }

  let msg
  if (scoreSteve > scoreJosh) {
    msg = `Steve wins ${scoreSteve} to ${scoreJosh}`
  } else if (scoreJosh > scoreSteve) {
    msg = `Josh wins ${scoreJosh} to ${scoreSteve}`
  } else {
    msg = 'Tie'
  }

  return msg
} */

function winner(deckSteve, deckJosh) {
  let rank = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'],
    spoints = 0,
    jpoints = 0
  deckSteve.forEach((el, i) => {
    rank.indexOf(el) > rank.indexOf(deckJosh[i])
      ? spoints++
      : rank.indexOf(el) < rank.indexOf(deckJosh[i])
      ? jpoints++
      : 0
  })

  const result = (sp, jp) => {
    if (sp == jp) return 'Tie'
    if (sp > jp) return `Steve wins ${sp} to ${jp}`
    return `Josh wins ${jp} to ${sp}`
  }

  return result(spoints, jpoints)
}

const result = winner(['A', '7', '8'], ['K', '5', '9'])
console.log(result)
