class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

/* function minDepth(root) {
  if (!root) return 0
  if (!root.left) return minDepth(root.right) + 1
  if (!root.right) return minDepth(root.left) + 1
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
} */

 const minDepth = function (root) {

  if (root === null) return 0
  let queue = [{ node: root, depth: 1 }]

  while (queue.length > 0) {
    let { node, depth } = queue.shift()

    if (node.left === null && node.right === null) {
      return depth
    }

    if (node.left !== null) {
      queue.push({ node: node.left, depth: depth + 1 })
    }

    if (node.right !== null) {
      queue.push({ node: node.right, depth: depth + 1 })
    }
  }
} 

let root1 = new TreeNode(3)
root1.left = new TreeNode(9)
root1.right = new TreeNode(20)
root1.right.left = new TreeNode(15)
root1.right.right = new TreeNode(7)

console.log(minDepth(root1))

let root2 = new TreeNode(2)
root2.right = new TreeNode(3)
root2.right.right = new TreeNode(4)
root2.right.right.right = new TreeNode(5)
root2.right.right.right.right = new TreeNode(6)

console.log(minDepth(root2))
