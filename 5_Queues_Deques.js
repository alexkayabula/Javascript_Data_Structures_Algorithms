// QUEUES AND DEQUES


//Queues

// FIFO First In First Out, First Come First Served
// Creating the Queue class

class Queue{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;    // helps us track first element
        this.items = {};
    }
}

/*
enqueue --> Adds elements to the back of the queue
dequeue --> Removes the elements from the queue . Element at front
Returns the removed element
peek()  --> Returns first element from the queue, the first one added 
This methods only returns the element. The first one added for information purposes
isEmpty --> Returns true if the queue does not contain any element
and false if the queue is bigger than zero
size --> returns the number of elements the queue contains similar to length in array
 */


class Queue{
    constructor(){
        this.count = 0;        // help in controlling size of the queue
        this.lowestCount = 0;  // helps in tracking the first element
        this.items = {};
    }

    // Enqueuing elements to the queue
    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }
    
    //Dequeuing elements from the queue
    dequeue(){
        if (this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    
    // Peeking the element from the front of the queue
    peek(){
        if (this.isEmpty){
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    // Verifying if a queue is empty
    isEmpty(){
        return this.count - this.lowestCount === 0;
    }
    /**
     * isEmpty(){
     *   return this.size();
     * }
     */
    
     // Size
    size(){
        return this.count - this.lowestCount;
    }

    //Clearing the Queue
    clear(){
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    
    // Creating the toString method
    toString(){
        if (this.isEmpty){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}


// Using the Queue class
const queue = new Queue;
console.log(queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString);    // John, Jack
queue.enqueue('Camila');

console.log(queue.toString());  // john, Jack, Camila
console.log(queue.size());      // returns 3
console.log(queue.isEmpty());   // returns false
queue.dequeue(); // remove John
console.log(queue.toString()); // returns jack, Camila


//Deque

// The deque data structure
// double-ended queue
// Allows us to insert and remove elements from the end or
// from the front of the queue
// It is a merge between FIFO and LIFO, Queue and Stack

// Creating the Deque class
class Deque{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    
    // Adding elements to the front of the deque
    addFront(element){
        if(this.isEmpty()){
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        }else {
            for (let i = this.count; i > 0; i--){
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = elements;
        }
    }
    // Adds elements at the back of the queue
    addBack(element){
        this.items[this.count] = element;
        this.count++;
    }

    // Removes first element from the deque
    removeFront(){
        if (this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    // Removes the last element from deque
    removeBack(){
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    // Returns the first element from the deque
    peekFront(){
        if (this.isEmpty){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    // Returns the last element from the deque
    peekBack(){
        return this.items[this.count - 1 ]
    }
}


// Using Deque class
const deque = new  Deque;
console.log(deque.isEmpty());    // returns true
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString());   // John, Jack
deque.addBack('Camila');         // John, Jack, Camila
console.log(deque.size());       // 3
deque.removeFront();             // remove John
console.log(deque.toString());   // Jack, Camila
deque.removeBack();              // Camila decides to leave
console.log(deque.toString());   // Jack
deque.addBack('John')            // John added
console.log(deque.toString());   // John, jack


// Solving problems using queues and deques
// Modified version is circular queue

// The circular queue - Hot potato
const hotPotato = (elementsList, num) => {
    const queue = new Queue();
    const eliminatedtList = [];

    for (let i = 0; i < elementsList.length; i++){
        queue.enqueue(elementsList[i]);
    }

    // Loop till the queue has only one item
    while (queue.size() > 1){
        for (let i = 0; i < num; i++){
            // Move the elements to the back as you loop
            queue.enqueue(queue.dequeue());
            console.log(queue);
        }
        eliminatedtList.push(queue.dequeue());
    }

    return {
        eliminated : eliminatedtList,
        winner: queue.dequeue()
    }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = hotPotato(names, 7);

result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game`);
});
console.log(`The winner is: ${result.winner}`);


// Palindrome checker
// racecar

const palindromeChecker = (aString) => {
    if (aString === undefined || aString === null || 
        (aString !== null && aString.length === 0)){
        return false;
    }
    const deque = new Deque();
    const lowerString = aString.toLocalLowerCase().split(' ').join('');
    let isEqual = true;
    let firstChar, lastChar;

    for (let i = 0; i < lowerString.length; i++){
        deque.addBack(lowerString.charAt(i));
    }

    while (deque.size() > 1 && isEqual){
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }
    return isEqual;
}
