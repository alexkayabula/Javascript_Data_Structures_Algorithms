// Trees
// Top node of the tree is called the root
// Internal nodes have children
// External nodes do not have children
// Subtree is a node and its descendants
// depth consists of number of anscestors
// height of a tree consists of maximum depth of any node

// Binary and binary search trees
// Binary tree has two children atmost; one left child and one right
// Binary search tree is a binary tree but it allows you to store nodes with lesser values on the left-hand side and nodes with greater values on the right hand side.

// Creating the Node and BinarySearchTree classes

export class Node {
    constructor(key) {
        this.key = key;
        this.left = null; // left child node references
        this.right = null; // right child node references      
    }
}

// BinarySearchTree class
import { Comapre, defaultCompare, Compare } from './utils';
import { Node } from './models/node';

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // used to compare node values
        this.root = null;
    }
    
    // Inserting a key into the BST
    insert(key) {
        if (this.root === null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }
    // Helper method
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left === null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key)
            }
        } else {
            if (node.right === null) {
                 node.right = new Node(key);
            } else {
                this.insertNode(node.rigth, key);
            }
        }
    }
    // Tree Traversal
    // In-order traversal
    // Visits all nodes in an ascending order
    inOrderTraversal(callback){
        this.inOrderTraversalNode(this.root, callback);
    }
    // Helper
    inOrderTraversalNode(node, callback){
        if (node != null) {
            this.inOrderTraversalNode(node.left, callback);
            callback(node.key);
            this.inOrderTraversalNode(node.right, callback)
        }
    }
    // Pre-order traversal
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }
    // Helper
    preOrderTraverseNode(node, callback) {
        if (node != null){
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    // post-order traversal
    postOrderTraversal(callback) {
        this.postOrderTraversalNode(this.root, callback);
    }
    //helper
    postOrderTraversalNode(node, callback) {
        if (node != null) {
            this.postOrderTraversalNode(node.left, callback);
            this.postOrderTraversalNode(node.right, callback);
            callback(node.key);
        }
    }
    // Searching for minimum and maximum values
    // Minimum
    min(){
        return this.minNode(this.root);
    }
    minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }
    // Maximum
    max() {
        return this.maxNode(this.root);
    }
    maxNode(node) {
        let current = node;
        while(current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }
    // Searching for a specific value
    search(key) {
        return this.searchNode(this.root, key);
    }
    searchNode(node, key) {
        if (node == null) {
            return false;
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN){
            return this.searchNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }
    // Removing a node
    remove(key) {
        this.root = this.removeNode(this.root);
    }
    removeNode(node, key){
        if (node == null) {
            return null;
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // key is equal to node.item
            // case 1
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            // case 2
            if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }
        }
    }
}

// Adelson-Velskii and Landis tree (AVL Tree)
class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
        const BalancedFactor = {
            UNBALANCED_RIGHT: 1,
            SLIGHTLY_UNBALANCED_RIGHT: 2,
            BALANCED: 3,
            SLIGHTLY_UNBALANCED_LEFT: 4,
            UNBALANCED_LEFT: 5
        }
    }
    getNodeHeight(node) {
        if (node == null) {
            return -1;
        }
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }
    getBalancedFactor(node) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
        switch (heightDifference) {
            case -2:
                return this.getBalancedFactor.UNBALANCED_RIGHT;
            case -1:
                return this.getBalancedFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalancedFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalancedFactor.UNBALANCED_LEFT;
            default:
                return BalancedFactor.BALANCED;
        }
    }
    //LL Single rotation to the right

    
}