// The example is the train, the wagons are connected, the connection is the pointer
// Creating a LinkedList Class

import { defaultEquals } from './utils';
import { Node } from './linked-list-models';
import { throws } from 'assert';

export default class LinkedList {
    constructor(equalsFn = defaultEquals){
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
    // Pushing elements to the end of the linked list
    // this method adds new elements to the list
    push(element){
        const node = new Node(element);
        let current;
        if(this.head == null){
            this.head = node;
        } else {
            // reference to the first element
            current = this.head;
            while (current.next != null){  // get last item
                current = current.next;
            }
            // and assign next to the new element to make the link
            current.next = node;
        }
        this.count++;
    }
    // Removing elements from the linked list from a specific position
    // this method removes an item from a specific position
    removeAt(index){
        // check for out-of-bounds values
        if (index >= 0 && index < this.count){
            let current = this.head;
            // removing the first item
            if (index === 0){
                this.head = current.next;

            /**
             * Refactoring the remove method
             * else {
             *    const previous = this.getElementAt(index - 1);
             *    current = previous.next;
             *    previous.next = current.next;
             * }
             */
            } else {
                let previous;
                for (let i = 0; i < index; i++){
                    previous = current;
                    current = current.next;
                }
                // link previous with currents next: skip it to remove
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    // looping through the list until we get to the desired position
    /* this method returns the element of a specific position
       in the list. If the element does not exist in the list, it returns undefined 
    */
    getElementAt(index){
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++){
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    // Inserting an element at any position
    // This method inserts a new element at a specified position in the list
    insert(element, index){
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    // Returning the position of an element
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    // Removing an element from the linked list
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    // size
    size(){
        return this.count;
    }

    // isEmpty
    isEmpty(){
        return this.size();
    }
    // getHead
    getHead(){
        return this.head;
    }
    // toString method
    // This method returns a string representation of the linked list
    toString() {
        // We can use if (this.isEmpty())
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    }
}   


// Doubly linked lists
class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
}

class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }
    // Inserting a new element at any position
    insert(element, index){
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail;
                } else {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            } else if (index === this.count) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail  = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.count++;
            return true;
        }
        return false;
    }
    // Removing elements from any position
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
                if (this.count === 1) {
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }
            } else if (index === this.count - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                // link previous with currents next - skip it to remove
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}


// Circular linked lists
class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals){
        super(equalsFn)
    }
    // Inserting a new element at any position
    insert(element,  index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0){
                if (this.head == null) {
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    current = this.getElementAt(this.size());
                    // update last element
                    this.head = node;
                    current.next = this.head; 
                }
            } else {
                // nochanges in this senario
                const previous = this.getElementAt( index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    // Removing elements from any position
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                if (this.size() === 1) {
                    this.head = undefined;
                } else {
                    const removed = this.head;
                    current = this.getElementAt(this.size());
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            } else {
                // no need to update last element for circular list
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}


// Sorted linked lists

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

function defaultCompare(a,b){
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }
    // Inserting elements in order
    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        const pos = this.getIndexSortedElement(element);
        return super.insert(element, pos);
    }

    getIndexSortedElement(element) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element,  current.element);
            if (comp === Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }
}


// Creating the StackLinkedList class
class StackLinkedList {
    constructor() {
        this.items = new DoublyLinkedList();
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.removeAt(this.size() - 1);
    }
    peek() {
        if (this.isEmpty()){
            return undefined;
        }
        return this.items.getElementAt(this.size() - 1).element;
    }
    isEmpty() {
        return this.items.isEmpty();
    }  
    size() {
        return this.items.size();
    }
    clear() {
        this.items.clear();
    }
    toString() {
        return this.items.toString()
    }
}

