// Day 17: Data Structures
// Tasks/Activities:
// Activity 1: Linked List
//task 1
class Node{
  constructor(value, next=null){
    this.value= value;
    this.next=next;
  }

}
const node1= new Node(1);
const node2= new Node(2);
const node3 = new Node(3);

//linking node
node1.next= node2;
node2.next=node3;

console.log(node1);
console.log(node1.next);
console.log(node2.next);
console.log(node3.next);

//task2
class Node1 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToEnd(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeFromEnd() {
    if (!this.head) {
      console.log("The list is empty.");
      return null;
    }

    if (this.head === this.tail) {
      const removedNode = this.tail;
      this.head = null;
      this.tail = null;
      return removedNode.value;
    }

    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    const removedNode = this.tail;
    this.tail = currentNode;
    this.tail.next = null;
    return removedNode.value;
  }

  displayAllNodes() {
    if (!this.head) {
      console.log("The list is empty.");
      return;
    }

    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

// Example usage:
const list = new LinkedList();
list.addToEnd(1);
list.addToEnd(2);
list.addToEnd(3);
list.displayAllNodes(); // Output: 1, 2, 3
console.log(list.removeFromEnd()); // Output: 3
list.displayAllNodes(); // Output: 1, 2

