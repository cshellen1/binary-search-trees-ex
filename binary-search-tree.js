class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    let current = this.root;

    while (current) {
      if (val < current.val) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(val);
          return this;
        }
      }
      if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(val);
          return this;
        }
			}
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    function insertHelper(val, node) {
      if (val < node.val) {
        if (node.left === null) {
          node.left = new Node(val);
        } else {
          insertHelper(val, node.left);
        }
      }
      if (val > node.val) {
        if (node.right === null) {
          node.right = new Node(val);
        } else {
          insertHelper(val, node.right);
        }
      }
    }
    insertHelper(val, this.root);
    return this;
  }
  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) return current;
      current = val < current.val ? current.left : current.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function findHelper(val, node) {
      if (node === null) {
        return undefined;
      }
      if (val === node.val) return node;

      if (val < node.val) {
        return findHelper(val, node.left);
      } else {
				return findHelper(val, node.right);
      }
    }
    return findHelper(val, this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = [];

    function traverse(node){
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];

		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			visited.push(node.val);
		}
		traverse(this.root);
		return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = [];

    if (this.root === null) return visited;

    let queue = [this.root]

    while (queue.length > 0) {
      let currentNode = queue.shift();
      visited.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
