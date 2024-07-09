function yaForem(N, staff, K) {
  staff.sort((a, b) => b - a)

  let maxLevel = 0

  for (let i = 0; i < K; i++) {
    maxLevel += staff[i]
  }

  return maxLevel
}

console.log(yaForem(8, [5, 13, 8, 4, 4, 15, 1, 9], 8))
