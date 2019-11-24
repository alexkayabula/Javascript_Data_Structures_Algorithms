import { isNullOrUndefined } from "./util";

// Recursion
// A function is called recursive if it can call itself directly

function recursiveFunction(someParam) {
    recursiveFunction(someParam)
}

// A function is also called recursive if it can call itself indirectly

function recursiveFunction1(someParam) {
    return recursiveFunction2(someParam);
}

function recursiveFunction2(someParam) {
    return recursiveFunction1(someParam);
}

function understandRecursion(doIunderstandRecursion) {
    const recursionAnswer = confirm('Do you understand recursion');
    if (recursionAnswer === true) {   // base case , stop point
        return true;
    }
    understandRecursion(recursionAnswer);
}

// Calculating a factorial of a number
// factorial of a number n! is the result of multiplying numbers from 1 to n

function factorialIterative(number){
    if (number < 0) {
        return isNullOrUndefined;
    }
    let total = 1;
    for (let n = number; n > 1; n--) {
        total = total * n
    }
    return total;
}
console.log(factorialIterative(5));  // returns 120


// Recursive Factorial
function factorial(n) {
    if (n === 1 || n === 0) { // base case
        return 1;
    }
    return n * factorial(n - 1) // recursive call
}
console.log(factorial(5));

// The fibonacci sequence
// Iterative Fibonacci

function fibonacciIterative(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;

    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    let fibN = n;
    for (let i = 2; i <= n; i++) {  n >= 2
        fibN = fibNMinus1 + fibNMinus2;  // f(n-1) + f(n-2)
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
    }
    return fibN;
}

// Recursive Fibonacci
function fibonacci(n){
    if (n < 1) return 0;
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


// Fibonacci with memoization
function fibonacciMemoization(n) {
    const memo = [0, 1];
    const fibonacci = (n) => {
        if (memo[n] != null) return memo[n]; 
        return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    }
    return fibonacci;
}