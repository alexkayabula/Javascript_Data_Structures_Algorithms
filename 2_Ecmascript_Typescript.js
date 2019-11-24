// Ecmascript Typescript
// Spread and Rest Operators
let params = [1, 2, 3];
console.log(sum(...params));


let manipulateValues = (x, y, ...z) => {
   return (x+y * z.length);
}

console.log(manipulateValues(2,3, "emails", "passwords"));


// Enhanced object Properties

// array destructuring

let [x, y] = [2,3];
console.log(x,y);


// Variable Swapping
[x, y] = [y, x];

console.log(x, y);


// property shorthand

let [username, password] = ['Alexk', '1234'];
let loggedInUser = {username, password};
console.log(loggedInUser);


// property shorthand method

let store = {
    name: "Shoprite",
    location () {
        console.log(store.name + " is located at lugogo")
    }
}
console.log(store.location());


// OOP with classes

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    logIn (){
        console.log(this.username, this.password);
    }
}

let newUser = new User("Alex", "alex@gmail.com", "xxxxx");

console.log(newUser.username);
console.log(newUser.password);


// Inheritance

class loggedInUser extends User {
    constructor(username, email, password, address){
        super(username, email, password);    // Refer to the constructor superclass
        this.address = address;
    }

    userAddress (){
        console.log (this.address)
    }
}

let newLoggedInUser = new loggedInUser("Peter", "peter@gmail.com", "xxxx", "kyengera");
console.log(newLoggedInUser.address);
console.log(newLoggedInUser.logIn());

// Getters and Setters

class Person {
    constructor(name){
        this._name = name;
    }

    get username(){
        return this._name;
    }

    set username(value){
        this._name = value;
    }
}

let newPerson = new Person("alex")


// Exponential Operator

// **
let r = 4;
let area = 3.14 * r**2;


// Modules

const circArea = r => 3.14 * r ** 2;
const sqrArea = s =>  s * s


export { circArea, sqrArea }; 
// Optionally const export circArea = r => 3.14 * r ** 2;
// export const sqrArea = s =>  s * s  

// export { circArea as circle, sqrArea as square }
// import {circle, square}

// After exporting these functions can be used 
// by other modules

// To use them in other modules we import

import { circArea, sqrArea } from './0.1_javascript_basics';


// Typescript

