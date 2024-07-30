class TreeNode {
  constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}


function buildTree(preorder, inorder) {
  
  if (!preorder.length || !inorder.length) {
      return null;
  }

  
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);

  
  const rootIndex = inorder.indexOf(rootVal);

  
  const leftInorder = inorder.slice(0, rootIndex);
  const leftPreorder = preorder.slice(1, 1 + leftInorder.length);

  
  const rightInorder = inorder.slice(rootIndex + 1);
  const rightPreorder = preorder.slice(1 + leftInorder.length);

  
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
}

const preorder1 = [3, 9, 20, 15, 7];
const inorder1 = [9, 3, 15, 20, 7];
const tree1 = buildTree(preorder1, inorder1);
console.log(JSON.stringify(tree1, null, 2));