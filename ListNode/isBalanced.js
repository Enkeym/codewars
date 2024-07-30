class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function isBalanced(root) {
  function checkBalance(node) {
    if (node === null) return [true, 0]

    const [leftBalanced, leftHeight] = checkBalance(node.left)
    if (!leftBalanced) return [false, 0]

    const [rightBalanced, rightHeight] = checkBalance(node.right)
    if (!rightBalanced) return [false, 0]

    const balanced = Math.abs(leftHeight - rightHeight) <= 1
    const height = Math.max(leftHeight, rightHeight) + 1

    return [balanced, height]
  }

  return checkBalance(root)[0]
}

function isBalanced(root) {
  if (root === null) return true
  let isBalanced = true
  function setHeight(node) {
    if (!node) return 0
    const left = setHeight(node.left)
    const right = setHeight(node.right)

    if (Math.abs(left - right) > 1) {
      isBalanced = false
    }

    return 1 + Math.max(left, right)
  }

  setHeight(root)
}
