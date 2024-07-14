/* function test(a) {
  let s = [...a].sort((a, b) => b - a)
  return a.map((v) => s.indexOf(v) + 1)
}

console.log(test([5, 2, 3, 5, 5, 4, 9, 8, 0])) */

/* function test(...nums) {
  let countObj = {}

  for (let num of nums) {
    let numStr = num.toString()

    for (let digit of numStr) {
      if (countObj[digit]) {
        console.log(countObj[digit].count++)
        console.log(countObj[digit].numbers.push(num))
      } else {
        countObj[digit] = { count: 1, numbers: [num] }
      }
    }
  }

  for (let digit in countObj) {
    console.log(
      `Цифра ${digit} встречается ${
        countObj[digit].count
      } раз в числах: ${countObj[digit].numbers.join(', ')}`
    )
  }
}

console.log(test(5, 2, 3, 5, 5, 4, 9, 8, 0)) */

function twoSum(nums, target) {
  let numIndexMap = {}

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]

    if (numIndexMap.hasOwnProperty(complement)) {
      return [numIndexMap[complement], i]
    }

    numIndexMap[nums[i]] = i
  }
}

console.log(twoSum([3, 2, 4], 6))
