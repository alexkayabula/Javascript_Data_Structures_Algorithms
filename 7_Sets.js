// Sets
// A set is a collection of items that are unordered and consists of unique elements

class Set {
    constructor() {
        this.items = {};
    }
    // has element
    // this method returns true if the elements exists in the set and false otherwise
    has(element) {
        return element in this.items;
    }

    /**
     * Better way of implementing it
     * has(element) {
     *   return Object.prototype.hasOwnProperty.call(this.items, element);
     * }
     */

    // This method adds a new element to the set
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }
    // This method removes an element from the set
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }
    // Remove all items from the set
    clear() {
        this.items = {};
    }
    // Return how many elements are in a set
    // This works in neweer browsers
    size(){
        return Object.keys(this.items).length;
    }
    // This method works in older browsers
    sizeLegacy() {
        let count = 0;
        for(let key in this.items) {
            if(this.items.hasOwnProperty(key)) {
                count++;
            }
            return count;
        }
    }
    // This methods returns an array of all the values(elements) of the set
    // Works in newer browsers
    values() {
        return Object.values(this.items);
    }

    // Works in any browser
    valuesLegacy() {
        let values = [];
        for(let key in this.items) {
            if(this.items.hasOwnProperty(key)) {
                values.push(key);
            }
        }
        return values;
    }
    // Set Operations
    /**
     * Union -> returns new set of elements from both sets
     * Intersection -> returns a new set of elements that exist in both sets
     * Difference -> returns a new set of of elements that exist in first set but not second
     * Subset -> confirms if a given set is a subset of the other
     */

    union (otherSet) {
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet
    }
    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        for (let i = 0; i < values.length; i++){
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
    // Improving the intersection method
    // Optimizing
    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)){
                intersectionSet.add(value)
            }
        });
        return intersectionSet;
    }

    // Set difference
    difference(otherSet){
        const differenceSet = new Set();
        this.values().forEach(value => {
            if(!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }
    // Subset
    isSubsetOf(otherSet){
        if (this.size() > otherSet.size()) {
            return false;
        }
        let isSubset = true;
        this.values().every(value => {
            if (!otherSet.has(value)) {
                isSubset = false;
                return false;
            }
            return true;
        });
        return isSubset;
    }
}

// Using the Set class
const set = new Set();
set.add(1);
console.log(set.values()) // returns [1]
set.add(2);
console.log(set.values())  // returns [1,2]
console.log(set.size())    // returns 2

// Using union

const setA = new Set();
setA.add(1);
const setB = new Set();
setB.add(2);
const unionAB = setA.union(setB);
console.log(unionAB.values());      // returns [1,2]

// Using intersection
const setA = new Set();
setA.add(1);
setA.add(2);

const setB = new Set();
setB.add(2);
setB.add(3);

const intersectionAB = setA.intersection(setB); // returns [2]


// ES6 the set class
const set = new Set();
set.add(1);
console.log(set.values()); // returns @Iterator

//Simulating the union operation
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
const union = (set1, set2) => {
    const unionAb = new Set();
    set1.forEach(value => unionAb.add(value));
    set2.forEach(value => unionAb.add(value));
    return unionAb;
}
console.log(union(setA, setB));    // returns {1,2,3,4}

// Simulating the intersection operation
const intersection = (set1, set2) => {
    const intersectionSet = new Set();
    set1.forEach(value => {
        if (set2.has(value)){
            intersectionSet.add(value);
        }
    })
    return intersectionSet;
}

// Simulating the difference operation
const difference = (set1, set2) => {
    const differenceSet = new Set();
    set1.forEach(value => {
        if (!set2.has(value)) {
            differenceSet.add(value);
        }
    });
    return differenceSet;
};
console.log(difference(setA, setB))

// Using the spread operator
// ES6

// set union operation
console.log(new Set([...setA, ...setB]));
// set intersection operation
console.log(new Set([...setA].filter(x => setB.has(x))))
// set difference operation
console.log(new Set([...setA].filter(x => !setB.has(x))));