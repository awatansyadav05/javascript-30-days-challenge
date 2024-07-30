//Activity 4 :Binary Tree
//task 7
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//task 8
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the binary tree
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to insert a node into the correct position in the tree
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // In-order traversal to display nodes
  inOrder() {
    this.inOrderHelper(this.root);
  }

  // Helper method for in-order traversal
  inOrderHelper(node) {
    if (node !== null) {
      this.inOrderHelper(node.left);
      console.log(node.value);
      this.inOrderHelper(node.right);
    }
  }
}

// Example usage
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log("In-order traversal:");
tree.inOrder();
