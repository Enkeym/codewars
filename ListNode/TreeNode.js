class TreeNode {
  constructor(value) {
    this.value = value
    this.children = []
  }
}

function traverseTree(node) {
  console.log(node.value)
  for (let child of node.children) {
    traverseTree(child)
  }
}

let root = new TreeNode(1)
root.children.push(new TreeNode(2))
root.children.push(new TreeNode(3))
root.children[0].children.push(new TreeNode(4))
root.children[0].children.push(new TreeNode(5))

traverseTree(root)
