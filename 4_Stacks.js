// Stacks
// LIFO 


// Methods push(), pop(), peek(), isEmpty(), clear(), size()
class Stack{
    constructor(){
        this.items = [];
    }
    // Pushing elements to the stack
    push(element){
        this.items.push(element);
    }
    // Popping elements from the stack
    pop(){
        return this.items.pop();
    }
    // Peeking the element from the top of the stack
    peek(){
        return this.items[this.items.length -1 ];
    }
    // Verifying whether the stack is empty
    isEmpty(){
        return this.items.length === 0;
    }
    // Determining length of the stack
    size(){
        return this.items.length;
    }
    // Clearing elements of the stack
    clear(){
        this.items = [];
    }
}


//Using the Stack class
const stack = new Stack();
console.log(stack.isEmpty()); // return true

stack.push(5);
stack.push(8);
stack.peek(); 

console.log(stack.peek());    // returns 8
stack.push(11);
console.log(stack.size());    // returns 3
console.log(stack.isEmpty()); // returns false
stack.push(15);
console.log(stack.size());    // returns 4
stack.pop();
stack.pop();
console.log(stack.size());    // returns 2


// Creating a Javascript object-based Stack class

class Stack {
    constructor(){
        this.count = 0;
        this.items = {};
    }
    // pushing an element
    push(element){
        this.items[this.count] = element;
        this.count++;
    }
    // verifying whether the stack is empty
    isEmpty(){
        return this.count === 0;
    }
    size(){
        return this.count;
    }
    // Popping elements from the stack
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    // Peeking at the top of the stack
    peek(){
        return this.items[this.count - 1 ]
    }
    // Clearing
    clear(){
        this.count = 0;
        this.items = {};
    }
    // Craeting a toString method
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.item[0]}`;
        for(i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString;
    }
}


// Making properties private
// declare the items as WeakMap
const items = new WeakMap();

class Stack {
    constructor(){
        // set this as key and the array as value of the WeakMap
        items.set(this, []);
    }
    push(element){
        // retrieve this
        const s = items.get(this);
        s.push(element);
    }
    pop(){
        const s = items.get(this);
        const r = s.pop();
        return r; 
    }
}


// Solving problems using stacks
// Converting decimal numbers to binary
// To convert decimal number to binary we divide the number by 2

const  decimalToBinary = (decNumber) => {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';

    while(number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!remStack.isEmpty()){
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}


// base converter algorithm
// decimal to bases between 2 and 36
const baseConverter = (decNumber, base) => {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVEXYZ';
    let number = decNumber;
    let rem;
    let baseString = '';

    if (!(base >= 2 && base <=36)){
        return '';
    }
    while(number > 0){
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }
    while (!remStack.isEmpty()){
        baseString += digits[remStack.pop()];
    }
    return baseString;
}
