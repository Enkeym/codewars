class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function sortedArrayToBST(nums) {
  if (nums.length === 0) return null

  function buildBST(start, end) {
    if (start > end) return null

    const mid = Math.floor((start + end) / 2)
    const node = new TreeNode(nums[mid])

    node.left = buildBST(start, mid - 1)
    node.right = buildBST(mid + 1, end)

    return node
  }

  return buildBST(0, nums.length - 1)
}

const nums = [-10, -3, 0, 5, 9]
const bst = sortedArrayToBST(nums)
console.log(bst)
