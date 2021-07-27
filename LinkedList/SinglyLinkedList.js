/**
 * Singly Linked List practice
 * Implementing push, pop, shift, unshift, get, set, insert, remove, reverse
 * h								(head node)
 * 0 -> 0 -> 0 -> 0 -> 0
 */

/** Node's to store in the list */
class Node {
  constructor(value) {
    /** Node value */
    this.value = value;
    /** Next node in the list */
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    /** First node in the list */
    this.head = null;
    /** Last node in the list */
    this.tail = null;
    /** Count of the nodes */
    this.length = 0;
  }

  /** Return the node at a given index */
  get(index) {
    /** If index is less than zero, or greater than than the length return false  */
    if (index < 0 || index >= this.length) return false;

    /** Keep track of our index */
    let current = this.head;

    /** Increment value to count up to index */
    let counter = 0;

    /** Keep moving through the list until counter === index */
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    /** return the found node */
    return current;
  }

  /** Change the value of a node at a given index */
  set(index, value) {
    if (index < 0 || index >= this.length) return false;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    current.value = value;
    return current;
  }

  insert(index, val) {
    /** Return early if index is a bad value, or highter than the list count */
    if (index < 0 || index >= this.length) return false;

    /** If index is 0, use unshift helper method to add the node at the beginning */
    if (index === 0) return !!this.unshift(val);

    /** If index the same as the count, use push helper method to add the node at the end */
    if (index === this.length - 1) return !!this.push(val);

    let newNode = new Node(val);
    let counter = 0;
    let current = this.head;
    let prev = this.head;

    while (counter !== index) {
      let temp = current;
      current = current.next;
      prev = temp;
      counter++;
    }

    newNode.next = current;
    prev.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift(index);
    if (index === this.length - 1) return !!this.pop(index);

    let counter = 0;
    let current = this.head;
    let prev = this.head;

    while (counter !== index) {
      let temp = current;
      current = current.next;
      prev = temp;
      counter++;
    }

    prev.next = current.next;
    this.length--;
    return true;
  }

  /** Insert a new node at the end of the list */
  push(val) {
    /** Create a new node for list */
    let newNode = new Node(val);

    /** If the list doesn't have a head: insert new node at the beginning */
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      /** If the list has at least one node, insert the new node at the end */
    } else {
      /** Set the current tail next property to our new node */
      this.tail.next = newNode;

      /** Set the tail to our new node */
      this.tail = newNode;
    }
    this.length++;

    /** Return the updated list */
    return this;
  }

  /** Remove the last node from the list */
  pop() {
    /** Return undefined if the list is empty */
    if (!this.head) return undefined;

    /** Track the current node in the list */
    let current = this.head;

    /** Keep track of the new tail for the updated list */
    let newTail = current;

    /** As long as current node has a next node, continue */
    while (current.next) {
      /** Set newTail to the current node  */
      newTail = current;
      /** Update the current node, to next */
      current = current.next;
    }

    /** Once we reach the second to last node
     * Remove the next node, and set the tail property to the current node
     */
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  /** Remove the head from the list */
  shift() {
    if (!this.head) return false;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++;
    return this;
  }

  reverse() {
    if (!this.head) return false;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return true;
  }

  print() {
    let current = this.head;
    let count = 0;
    let arr = [];

    while (count < this.length) {
      arr.push(current.value);
      current = current.next;
      count++;
    }

    console.log(arr);
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.print();

list.shift();
list.print();

list.unshift("joe");
list.print();

list.set(2, "new joe");
list.print();

list.insert(2, "new one");
list.print();

list.print();

list.reverse();
list.print();
