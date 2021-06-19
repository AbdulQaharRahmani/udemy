class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    this.length++;
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    if (index === 0) this.prepend(value);
    else if (index >= this.length - 1) this.append(value);
    else {
      const newNode = new Node(value);
      const temp = this.traverseToIndex(index - 1); // the node before the index to be added

      newNode.next = temp.next;
      temp.next = newNode;

      this.length++;
    }
  }
  remove(index) {
    if (index === 0 || this.length === 1) {
      this.head = this.head.next;
    } else if (index >= this.length) {
      const node = this.traverseToIndex(this.length - 2); // one before last
      node.next = null;
      this.tail = node;
    } else {
      const previousNode = this.traverseToIndex(index - 1);
      const node = this.traverseToIndex(index);
      previousNode.next = node.next;
    }

    this.length--;
  }
  traverseToIndex(index) {
    let node = this.head;
    let counter = 0;
    while (counter !== index) {
      node = node.next;
      counter++;
    }
    return node;
  }
  reverse() {
    if (this.length <= 1) {
      return;
    }
    let currentNode = this.head.next;
    let previousNode = this.head;
    this.head.next = null;
    this.tail = this.head;

    while (currentNode) {
      let temp = currentNode.next;
      currentNode.next = previousNode;

      previousNode = currentNode;
      currentNode = temp;
    }
    this.head = previousNode;
  }
  display() {
    let temp = this.head;
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.append(60);
linkedList.append(65);
linkedList.prepend(20);
linkedList.prepend(25);
linkedList.append(78);
linkedList.insert(3, 30);
linkedList.insert(0, 40);
linkedList.insert(5, 403);
linkedList.remove(50);
linkedList.display();
linkedList.reverse();
console.log();
linkedList.display();