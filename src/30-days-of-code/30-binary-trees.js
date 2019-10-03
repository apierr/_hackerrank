// ### Task
// A level-order traversal, also known as a breadth-first search, visits each level of a tree's nodes from left to right, top to bottom. You are given a pointer, root, pointing to the root of a binary search tree. Complete the levelOrder function provided in your editor so that it prints the level-order traversal of the binary search tree.

// Hint: You'll find a queue helpful in completing this challenge.

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);

            return this.root;
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }

        return this.root;
    };

    // Start of function levelOrder
    this.levelOrder = function(root) {
        // Add your code here
        let queue = [root];
        while (queue.length > 0) {
            node = queue.pop();
            process.stdout.write(node.data + " ");
            if (node.left) queue.unshift(node.left);
            if (node.right) queue.unshift(node.right);
        }
    }; // End of function levelOrder
} // End of function BinarySearchTree

const main = function() {
    var tree = new BinarySearchTree();
    var root = null;
    const _input = "6 3 5 4 7 2 1";

    var values = _input.split(" ").map(Number);

    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    tree.levelOrder(root);
};

main();
