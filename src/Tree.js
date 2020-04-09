/* eslint-disable prettier/prettier */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    this.children.push(new Tree(value));
  }

  contains(target) {
    let result = false;
    let inner = function(obj) {
      if (obj.value === target) {
        result = true;
      }
      obj.children.forEach(function(child) {
        inner(child);
      });
    };
    inner(this);
    return result;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  traverseDepthFirst(fn) {}

  traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = Tree;
