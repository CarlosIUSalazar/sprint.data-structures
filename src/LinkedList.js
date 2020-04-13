/* eslint-disable prettier/prettier */
function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    if (headValue !== undefined) {
      this.head = new Node(headValue);
      this.tail = this.head;
      this.length = 0;
    }
  }

  appendToTail(value) {
    let newNode = new Node(value); //childnode

    if (!this.head) {
      //if there is no head
      this.head = newNode;
      this.tail = this.head;
      return this.tail;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    //console.log("AAAAAAAAAAA", this, this.tail, newNode)
    return this.tail;
  }

  removeHead() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  findNode(value) {
    let node = this.head;
    while (node.value !== value) {
      if (node.next === null) return null;
      node = node.next;
    }
    return node;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/

  forEach(callback) {}

  print() {}

  insertHead(value) {}

  insertAfter(refNode, value) {}

  removeAfter(refNode) {}
}

module.exports = LinkedList;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
