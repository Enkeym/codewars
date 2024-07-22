class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

/* function isSymmetric(root) {
  if (!root) return true

  function isMirror(left, right) {
    if (!left && !right) return true
    if (!left || !right) return false
    if (left.val !== right.val) return false

    return isMirror(left.left, right.right) && isMirror(left.right, right.left)
  }

  return isMirror(root.left, root.right)
} */

var isSymmetric = function (root) {
  let isMirror = function (left, right) {
    if (left === null && right === null) return true
    if (left === null || right === null) return false
    if (left.val !== right.val) return false

    return isMirror(left.left, right.right) && isMirror(left.right, right.left)
  }

  return isMirror(root.left, root.right)
}

const tree1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
)
console.log(isSymmetric(tree1))

const tree2 = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(3))
)
console.log(isSymmetric(tree2))
