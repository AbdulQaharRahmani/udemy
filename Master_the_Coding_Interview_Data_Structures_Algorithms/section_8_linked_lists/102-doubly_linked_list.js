class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  prepend(value) {
    if (this.length === 0) {
      this.append(value);
    } else {
      let node = new Node(value);
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
      this.length++;
    }
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else {
      let node = new Node(value);
      let previous = this.traverseToIndex(index - 1);
      let next = this.traverseToIndex(index);
      next.previous = node;
      previous.next = node;
      node.previous = previous;
      node.next = next;
      this.length++;
    }
  }
  traverseToIndex(index) {
    let temp, counter;
    if (index > this.length / 2) {
      temp = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        temp = temp.previous;
        counter--;
      }
    } else {
      temp = this.head;
      counter = 0;
      while (counter !== index) {
        temp = temp.next;
        counter++;
      }
    }
    return temp;
  }
  display() {
    let temp = this.head;
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

let list = new DoublyLinkedList();
list.append(3);
list.append(5);
list.append(6);
list.prepend(1);
list.prepend(2);
list.insert(3, 89);
list.insert(0, 30);
list.display();
