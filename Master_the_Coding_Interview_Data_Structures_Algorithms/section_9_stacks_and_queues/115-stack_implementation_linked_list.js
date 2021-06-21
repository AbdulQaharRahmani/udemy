class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.length = 0;
        this.last = null;
    }
    peek() {
        if (!this.last)
            return null;
        return this.last.value;
    }
    push(value) {
        const node = new Node(value);
        node.next = this.last;
        this.last = node;
        this.length++;
    }
    pop() {
        if (!this.last) {
            return null;
        }
        this.length--;
        let temp = this.last.value;
        this.last = this.last.next;
        return temp;
    }
}

let stack = new Stack();
stack.push(30);
stack.push(40);
stack.push(20);

console.log(stack.pop());
console.log(stack.pop());