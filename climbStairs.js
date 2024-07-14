/* function climbStairs(n) {
  if (n === 0) return 1
  if (n === 1) return 1
  if (n === 2) return 2

  let dp = [n + 1]

  dp[0] = 1
  dp[1] = 1
  dp[2] = 2

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}
 */

function climbStairs(n) {
  const res = [0, 1]
  for (let i = 0; i < n; i++) {
    res.push(res[i] + res[i + 1])
  }
  return res[n + 1]
}
console.log(climbStairs(4))
