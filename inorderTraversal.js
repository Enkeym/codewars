// class TreeNode {
//   constructor(val = 0, left = null, right = null) {
//       this.val = val;
//       this.left = left;
//       this.right = right;
//   }
// }

// function inorderTraversal(root) {
//   let result = [];
//   let stack = [];
//   let current = root;

//   while (current !== null || stack.length > 0) {
//       // Переход к самому левому узлу
//       while (current !== null) {
//           stack.push(current);
//           current = current.left;
//       }

//       // Обработка текущего узла
//       current = stack.pop();
//       result.push(current.val);

//       // Переход к правому узлу
//       current = current.right;
//   }

//   return result;
// }

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

function inorderTraversal(root) {
  const result = [];
  function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
  }
  traverse(root);
  return result;
}