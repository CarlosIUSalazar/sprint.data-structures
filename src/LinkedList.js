/* eslint-disable prettier/prettier */
function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    if (headValue !== undefined) {
      this.head = new Node(headValue); //rootnode
      this.tail = this.head;
      // this.value = null;
      // this.next = null;
    }
  }

  appendToTail(value) {
    let newNode = new Node(value); //chhildnode

    if (this.head === undefined) {
      this.head = newNode;
      this.tail = this.head;
      return this.tail;
    }

    this.value = value;
    // console.log('val', value, 'head', this.head);
    // console.log('next', this.next, 'tail', this.tail);
    this.head.next = this.tail;
    this.tail.value = this.value;
    // this.tail.value = this.value;
    return this.tail;
    // console.log(this.tail)
    // return this.tail = this.value;
  }

  // linkedList.appendToTail(3);
  // Node(3) {
  //   this.next = 4;
  //   this.value = 3;
  // }

  // linkedList.appendToTail(4);
  // Node(value) {
  //   this.next = null;
  //   this.value = 4;
  // }

  removeHead() {
    let temp = this.head;
    this.head.next = this.temp.next;
    //temp = null;
    return temp;
    // temp = head
    // head = head.next
    // delete temp
  }

  findNode(value) {}

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
