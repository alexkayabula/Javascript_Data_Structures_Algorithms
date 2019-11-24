// HTML & JAVASCRIPT
<html>
    <head>
        <meta charset="UTF-8"></meta>
    </head>
    <body>
        <script>
            alert('Hello World');
        </script>
    </body>
</html>

//

{/* <html>
    <head>
       <meta charset="UTF-8"></meta>
    </head>
    <body>
       <script src="hello_world.js"></script>
    </body>
</html> */}


// VARIABLES

let num = -1;
num = 3;
let str = "Hello World";

// Global Variable

let count = 1;  // Global variable can be accesed any where

countNumbers = () => {
  let result = count += 2;
  return result
}

// Local Variable

let value = 10;
let result;
multiplyNumbers = () => {
   let num = 3;          // num is a local variable only accesseble by this function
   result = value * num;
   return result;
}


// Operators
// typeof, &&, ||, !=, ===, 
x += y == (x = x + y);
x -= y == (x = x - y);
x *= y == (x = x * y);



// Control Structures

// If

let x;
if(x === 1) {
    return x *= 2;
} else {
    return x++;
}

// Switch

let month = 6;
let currentMonth = "November";

switch (month){
    case (month === 1): 
        return "Janaury";
    case (month === 2): 
        return "February";
    default:
        return currentMonth; 
}

// Loops

// for

for (let i; i<10; i++){
    console.log(i);
}

// while

let y = 0;
while(y < 10){
    console.log(y);
}

// do...while

let i = 0;
do {
console.log(i);
i++
} while (i < 20);

// Functions

greetings = () => {
    console.log("hello world");
}
greetings();

// Object Oriented Programming 

class User {
    constructor (username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}

let newUser = new User("Alex", "1234", "alex@gmail.com");
console.log(newUser);





