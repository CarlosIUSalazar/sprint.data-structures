class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.right = undefined;
    this.left = undefined;
  }

  insert(value) {
    // COMPLEXITY: O(log N)
    const child = new BinarySearchTree(value);
    function hasChild(node) {
      if (value > node.value) {
        if (node.right === undefined) {
          node.right = child;
        } else {
          hasChild(node.right);
        }
      } else if (value < node.value) {
        if (node.left === undefined) {
          node.left = child;
        } else {
          hasChild(node.left);
        }
      } else {
        return this;
      }
    }
    hasChild(this);
    return this;
  }

  contains(value) {
    //COMPLEXITY: O(log N)
    let hasValue = false;
    function hasChild(node) {
      if (node.value === value) {
        hasValue = true;
        return;
      }
      if (value > node.value && node.right) {
        hasChild(node.right);
      } else if (value < node.value && node.left) {
        hasChild(node.left);
      }
    }
    hasChild(this);
    return hasValue;
  }

  traverseDepthFirstInOrder(callback) {
    //COMPLEXITY: O(log N)
    function hasChild(node) {
      if (!node.left) return callback(node);
      if (node.left) {
        hasChild(node.left);
        callback(node);
      }
      if (node.right) {
        hasChild(node.right);
      }
    }
    hasChild(this);
  }
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

module.exports = BinarySearchTree;
