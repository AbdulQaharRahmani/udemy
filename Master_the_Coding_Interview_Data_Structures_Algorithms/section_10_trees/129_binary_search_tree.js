class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      this._insert(this.root, node);
    }
  }
  _insert(next, node) {
    if (!next) {
      return node;
    }

    if (node.value > next.value) {
      next.right = this._insert(next.right, node);
    } else {
      next.left = this._insert(next.left, node);
    }

    return next;
  }
  remove(value) {
   this.root =  this._remove(this.root, value);
  }
  _findLeftMost(node) {
    if (!node.left) {
      return node;
    }
    return this._findLeftMost(node.left);
  }
  _remove(node, value) {
    if(!node){
        return null;
    }
    if ( node.value === value) {
      if (!node.right && !node.left) return null;
      else if (!node.left) return node.right;
      else if (!node.right) return node.left;
      else {
        const leftestNode = this._findLeftMost(node.right);
        this._remove(node, leftestNode.value);
        leftestNode.left = node.left;
        leftestNode.right = node.right;
        return leftestNode;
      }
    } else if (node.value > value) {
      node.left = this._remove(node.left, value);
    } else {
      node.right = this._remove(node.right, value);
    }

    return node;
  }
  lookup(value) {
    return this._lookup(this.root, value);
  }
  _lookup(node, value) {
    if (!node || node.value === value) {
      return node;
    }
    if (node.value > value) {
      return this._lookup(node.left, value);
    } else {
      return this._lookup(node.right, value);
    }
  }
  display() {
    console.log(JSON.stringify(this.root));
  }
  traverse() {
    this._traverse(this.root);
  }
  _traverse(node) {
    if (!node) {
      return;
    }

    this._traverse(node.left);
    console.log(node.value);
    this._traverse(node.right);
  }
}

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(60);
binarySearchTree.insert(30);
binarySearchTree.insert(1);
binarySearchTree.insert(55);
binarySearchTree.insert(38);
binarySearchTree.insert(44);
binarySearchTree.remove(0);

// console.log(JSON.stringify(binarySearchTree.lookup(8)));
binarySearchTree.traverse();
binarySearchTree.display();
