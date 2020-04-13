class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    // COMPLEXITY: O(1)
    this.children.push(new Tree(value));
  }

  contains(value) {
    // COMPLEXITY: O(n)
    let result = false;
    let inner = function(obj) {
      if (obj.value === value) {
        result = true;
      }
      obj.children.forEach(function(child) {
        inner(child);
      });
    };
    inner(this);
    return result;
  }

  remove(value) {
    // COMPLEXITY: O(n2)
    let result = undefined;
    let recursion = (node) => {
      // console.log("node.childnre[0]",node.children[0].value)
      // console.log("value",value)
      if (node.children[0].value === value) {
        //console.log("parent",node);
        result = node.children[0].value;
        node.children[0] = null;
        return;
      }
      if (node.children.length !== 0) {
        node.children.forEach((element) => {
          recursion(element);
        });
      }
    };
    recursion(this);
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
