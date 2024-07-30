class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

var maxDepth = function (root) {
  if (!root) return 0
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  return Math.max(left, right) + 1
}

const root1 = new TreeNode(3)
root1.left = new TreeNode(9)
root1.right = new TreeNode(20, new TreeNode(15), new TreeNode(7))

console.log(maxDepth(root1)) // Ожидаемый результат: 3
