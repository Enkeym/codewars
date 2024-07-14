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
let nums = [3, 2, 4]
let target = 6

console.log(twoSum(nums, target))
