class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.newNode = class Node {
      constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
      }
    };
    this.root = null;
  }

  insert(value) {
    let newNode = new this.newNode(value);
    if (this.root === null) {
      //if there is no root
      this.root = newNode;
      return this;
    } else {
      //if there is a root then
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined; //for duplicates
        if (value < current.value) {
          if (current.left === null) {
            //if there is nothing on the left we found our spot
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            //keep looking
            current = current.right;
          }
        }
      }
    }
  }

  contains(value) {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    let found = false;
    while (current && !found) {
      //while there's something to loop over and we haven't found it
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        //if we found it
        return true;
      }
    }
    //if we don't find it
    return false;
  }

  traverseDepthFirstInOrder() {}
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
