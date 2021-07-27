class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * 0 -> 0 -> 0
 * [x] Print Display the values in the list
 * [x] Pop Remove the last node in the list
 * [x] Push Add a node to the end of the list
 * [x] Shift Remove a node to the beginning of the  list
 * [x] Unshift  Add the first node in the list
 * [x] Get Retrieve the node at a given index
 * ! [ ] Insert Add a node at a given index
 * ! [ ] Remove Remove a node at a given index
 * ! [ ] Reverse Reverse the list order
 */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    if (index > this.length || !this.head) return false;
    let counter = 0;
    let node = this.head;

    while (counter !== index) {
      node = node.next;
      counter++;
    }

    console.log("Node Value: ", node.value);
    return true;
  }

  pop() {
    if (!this.head) return false;
    let current = this.head;
    let newTail;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return true;
  }

  shift() {
    if (!this.head) return false;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    const originalHead = this.head;
    this.head = newNode;
    newNode.next = originalHead;
    this.length++;
    return true;
  }

  print() {
    if (this.length <= 0) {
      console.log("List is empty");
      return false;
    }

    let counter = 0;
    let current = this.head;
    let displayArr = [];

    while (counter < this.length) {
      displayArr.push(current.value);
      current = current.next;
      counter++;
    }

    console.log(displayArr);
    return true;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(1);
list.push(3);
list.print();

list.pop();
list.pop();
list.print();

list.unshift(2);
list.unshift(3);
list.print();

list.pop();
list.print();

list.shift();
list.print();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.get(0);
list.print();
