import { Interface } from "readline";

// Arrays
// Initializing an Array
let users = [];


// determine elements in an Array
let users = ['Alex', 'Patrick', 'Peter', 'James']
console.log(users.length);


// Print all users in the store
for (i = 0; i < users.length; i++){
    console.log(users[i]);
}


//Array methods
//push ---> Add an element/elements at the end of an array

users.push('Tinah');

//pop  ---> Remove an element/elements at the end of an Array

users.pop();

//unshift ---> Add element/elements at the beginning of an Array

users.unshift('Mike');

//shift ---> Remove an element at the beginning of an Array

users.shift();

//splice ---> Remove and insert elements from a specific position

users.splice(2,2);

let users = ['Alex', 'Mike', 'John', 'Fred']; 

// Starting from element at index 1 remove 2 elements and replace them
users.splice(1, 2, 'Moses', 'Chris'); console.log(users);

// [ "Alex", "Moses", "Chris", "Fred" ]

// Multi dimensional Array
// Average temperature for two days
// Arrays of Arrays

let averageTempDay1 = [40,30,50];
let averageTempDay2 = [66,43, 42];

let averageTemp = [];

averageTemp[0] = [40,30,50];
averageTemp[1] = [66,43, 42];

// Iterating elements of a two dimensional Array
function printMatrix (averageTemp) {
    for (let i = 0; i < averageTemp.length; i++){
        for (let j = 0; j < averageTemp[i].length; j++){
            console.log(averageTemp[i][j])
        }
    }
}

// Iterating through a three dimension Array
// Write a function to display the average marks of three students

let averageStudentMarks = []

averageStudentMarks[0] = [55, 67, 33, 71];
averageStudentMarks[1] = [66, 61, 23, 88];
averageStudentMarks[2] = [44, 90, 55, 82];

function averageScoreChart(averageStudentMarks){
    for (i = 0; i < averageStudentMarks.length; i++){
        for(j=0; j < averageStudentMarks[i].length; j++){
            for (z = 0; z < averageStudentMarks[i][j].length; z++){
                console.log(averageStudentMarks[i][j][z]);
            }
        }
    }
}


// Summary of Array methods
/* 
concat --> Joins multiple arrays and returns a copy of the joined arrays

every --> Iterates every element of the array, verifying the desired condition(function) until false is returned

filter --> Creates an array with each element that evaluates to true in the function provided

forEach --> Executes a specific function on each element of the array

join --> Joins all the array elements into a string

indexof --> Searches the array for specific elements and returns its position

lastIndexof --> Returns the position of the last item in the array that matches the search criteria

map --> Creates a new array from a function that contains the condition and returns the elements of the array that match the condition

reverse --> Reverses the array so that the last item becomes the first and vice versa

slice --> Returns a new array from the specified index

some --> Iterates every element of the array verifying the desired condition(function) until true is returned

sort --> Sorts the array alphabetically or by supplied function

toString --> Returns the array as a string 

valueOf --> Similar to the toString method, returns the array as a string
*/


// Joining multiple Arrays
const positiveNumbers = [2,4,5,6];
const negativeNumbers = [ -5, -8, -9];
const zero = 0; 

let numbers = positiveNumbers.concat(zero,negativeNumbers);


// Iterator Functions
// Write a function that returns true if a number 
//is even and false if otherwise
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const isEven = x => x%2 === 0;


// Iterating using every method
numbers.every(isEven);


// Iterating using some method
numbers.some(isEven);  


// Iterating using forEach
numbers.forEach(x => console.log(x%2 === 0)) // returns false, true, false....


//Using map and filter
const myMap = numbers.map(isEven)          // returns false, true, false .....
const myFilter = numbers.filter(isEven);   // returns 2,4,6,8

// Using reduce
numbers.reduce((previous, current) => previous + current);    // returns 120


// ES6 new array functionalities

/*
@@iterator --> Returns the iterator object that contains
the key/value pairs of the array that can be sychronously 
called to retrieve key/value of the array elements

copyWithin --> Copies a sequence of values of the array into
the position of a start index.

entries --> Returns @@iterator, which contains key/value pairs.

includes --> Returns true if an element is found in the array 
and false otherwise

find  --> Searches for an element in the array given the
desired condition(callback function) and returns the element if it found

findindex --> Searches for an element in the array given the 
desired condition(callback function)and returns
the element index if it is found

fill --> Fills the array with a static value

from --> Creates a new array from an existing one

keys --> Returns @@iterator which contains the keys of the array

of --> Creates a new array from arguments passed to the method

values --> Returns @@iterator which contains the values of the array
*/


// Iterating using for..of
for (const n of numbers){
    console.log(n%2 === 0 ? true : false);
}


// Using @@iterator object
iterator = numbers[Symbol.iterator]();
for (const n of iterator){
    console.log(n);
}


//Array entries, keys and values
aEntries = numbers.entries();

for (const n of aEntries){
    console.log(n);
}

// keys method
// returns 0, 1, 2, 3 ......
aKeys = numbers.keys();

for (const n of aKeys){
    console.log(n);
}    
// values method
aValues = numbers.values();
for (const n of aValues){
    console.log(n);
}


// Using from method
let numbers2 = Array.from(numbers);

let evens = Array.from(numbers, x => x%2 ===0);


// Using Array.of method
let numbers3 = Array.of(1);    // returns [1]
let numbers4 = Array.of(2,4, 8, 9);    // returns [2,4,8,9]
let numbersCopy = Array.of(...numbers4)  // Can be used to make a copy of an array


// Using fill method
let numbersCopy = Array.of(1,2,3,4,5,6,7,8)
numbersCopy.fill(0);         // returns [0,0,0,0,0,0,0,0]
numberCopy.fill(3,5);        // returns [1,2,3,4,5, 3,3,3]
numbersCopy.fill(1,3,5);    // returns [1,2,3,1,1,6,7,8,9]
let as = Array(6).fill('A'); // returns ['A',A',A',A',A',A']
let ones = Array(2).fill(1) // returns [1,1]


// Using copyWithin method
let copyArray = [1,2,3,4,5,6]
copyArray.copyWithin(0,3);   // returns [5,6,3,5,6]
copyArray.copyWithin(1,4);   // returns [1,5,6,4,5,6]
copyArray.copyWithin(1,3,5)  // returns [1,4,5,4,5,6]


// Sorting Elements
// sort is done lexigonically
let numbers = [1,2,3,4,5,6,7,8,9,10,11]
numbers.sort(); // returns [1,10, 11.....]
// Solution

const compare = (a,b) => {
    if(a < b){
        return -1
    }
    if (a > b){
        return 1
    }
    return 0
}

numbers.sort(compare);


// Custom sorting

// Given a list of Friends names and ages,
// Write a function that sorts them by ages

const friends = [
    {name: "Mic", age: 29},
    {name: "Moso", age:28},
    {name: "Kennedy", age:31},
    {name: "Badman", age:32},
]

const comparePerson = (a, b) => {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
}

console.log(friends.sort(comparePerson)); 


// Sorting Strings

let names = ['Ana', 'ana', 'john', 'John']

const compareNames = (a,b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
}

console.log(names.sort(compareNames));

// If you want lowercase letters to come first in the sorted array
names.sort((a,b) => a.localeCompare(b));    // returns ['ana', 'Ana', 'john', 'John']


// Searching
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(numbers.indexOf(10));          // return 9
console.log(numbers.indexOf(100));         // return -1 because it doesnot exist
numbers.push(10);
console.log(numbers.lastIndexOf(10));      // return 15
console.log(numbers.lastIndexOf(100));     // -1


// ES6 find and findIndex
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const multipleOf13 = (element, index, array) => {
    return (element%13 === 0);
}

console.log(numbers.find(multipleOf13));        // returns value 13
console.log(numbers.findIndex(multipleOf13));   // return index 12 


// ES6 includes method

console.log(numbers.includes(15));    // return true
console.log(numbers.includes(20));    // returns false
console.log(numbers.includes(14, 5)); // returns true


// Outputting the array into a string
// toString and join
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(numbers.toString);     // returns 1,2,3,4,5,6.....15
console.log(numbers.join('-'));    // returns 1-2-3-5....14-15


// TypedArray class

// Arrays in Typescript
// Implementing the friends example in typescript
interface Person {
    name: string;
    age: number;
}

// const friends: {name: string, age: number}[];

const friends = [
    {name: "Mic", age: 29},
    {name: "Moso", age:28},
    {name: "Kennedy", age:31},
    {name: "Badman", age:32},
]

const comparePerson = (a: Person, b:Person) => {
    if (a.age < b.age){
        return -1;
    }
    if (a.age > b.age){
        return 1;
    }
    return 0;
}

console.log(friends.sort(comparePerson));
