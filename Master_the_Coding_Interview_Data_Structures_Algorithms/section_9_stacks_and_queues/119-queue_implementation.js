class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.length = 0;
        this.first = null;
        this.last = null;
    }
    peek() {
        if (this.length === 0) {
            return null;
        }
        return this.last.value;
    }
    enqueue(value) {
        const node = new Node(value);
        if (this.length === 0) {
            node.next = null;
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }
    dequeue() {
        if (this.length === 0)
            return null;
        const temp = this.first;
        this.first = this.first.next;
        this.length--;
        return temp.value;
    }
}
const queue = new Queue();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(203);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());