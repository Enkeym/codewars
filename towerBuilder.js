function towerBuilder(nFloors) {
  let tower = []

  for (let i = 1; i <= nFloors; i++) {
    let numStars = 2 * i - 1
    let numSpaces = nFloors - i
    let floor =
      ' '.repeat(numSpaces) + '*'.repeat(numStars) + ' '.repeat(numSpaces)
    tower.push(floor)
  }

  return tower
}

// Example usage:
console.log(towerBuilder(3))
/*
[
  "  *  ",
  " *** ",
  "*****"
]
*/
