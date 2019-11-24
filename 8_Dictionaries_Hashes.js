// A dictionary is used to store a key, value pair
// where the key could be used to find the element
// A dictionary is also called a map, symbol table, associative array

import { defaultToString, ValuePair } from './utils';

export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    // Verifying whether a key exists in the dictionary
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }
    // Setting a key and value in the dictionary and the ValuePair class
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }
    // Removing a value from a dictionary
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
    // Retrieving a value from a dictionary
    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }
    // Different approach but with more process cost
    get(key) {
        if (this.hasKey(key)){
            return this.table[this.toStrFn(key)];
        }
        return undefined;
    }
    // This method returns an array with all ValuePair objects
    keyValues() {
        return Object.values(this.table)
    }
    // Alternative in older browsers
    keyValues() {
        const valuePairs = [];
        for (const k in this.table) {
            if (this.hasKey(k)){
               valuePairs.push(this.table[k]);
            }
        }
        return valuePairs;
    }
    // This method returns all keys used to identify a value in the dictionary class
    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }
    // Values method returns an array of all values stored in a dictionary
    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }
    // Iterating each ValuePair of the dictionary with forEach
    forEach(callbackFn) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false) {
                break;
            }
        }
    }
    // This method returns how many values are stored in a dictionary
    size(){
        return Object.keys(this.table).length
    }
    // Alternative
    size(){
        return this.keyValues().length
    }
    // Verify whether the dictionary is empty
    isEmpty(){
        return this.size() === 0;
    }
    // Clear the dicitonary
    clear(){
        this.table = {};
    }
    // toString method
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString}, ${valuePairs[i].toString}`;
        }
        return objString;
    }
}


// Using the dictionary class
const dicitionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.size())   //returns 3
console.log(dictionary.keys());  // returns ["Gandalf", "John", "Tyrion"]
console.log(dictionary.values()) // returns ["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
console.log(dicitionary.get('Tyrion')) // returns tyrion@gmail.com
console.log(dictionary.keyValues())  // returns [{key: "Gandalf", value: "gandalf@email.com"}, ...]

dicitionary.forEach((k,v) => {
    console.log('forEach: ', `key: ${k}, value: ${v}`);   // return forEach: key: Gandalf, value: gandalf@email.com
})


// Hash table
// Creating a HashTable class

class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key;
        }
        const tableKey = this.StrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }
    hashCode(key) {
        return this.loseloseHashCode(key);
    }
    // Putting a key and value in a hash table
    put (key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }
    // Retrieving a value from the hash table
    get(key){
        const valuePair = this.table[this.hashCode(key)];
        return valuePair = null ? undefined : valuePair.value;
    }
    // Removing a value from the hash table
    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if (valuePair != null) {
            delete this.table[hash];
            return true;
        }
        return false;
    }
}

// Using the HashTable class
const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'john@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.hashCode('Gandalf') + ' - Gandalf');     // 19 - Gandalf
console.log(hash.hashCode('John') + ' - John');           // 29 - John
console.log(hash.hashCode('Tyrion') + ' - Tyrion');       // 16 - Tyrion
console.log(hash.get('Gandalf'));   // gandalf@email.com
console.log(hash.get('Loiane'));    // undefined
hash.remove('Gandalf');
console.log(hash.get('Gandalf'))    // undefined

// Handling collisions between hash tables
// Separate chaining

class HashTableSeparateChaining {
    constructor(toStrFn = defaultToString) {
        this.toString = toStrFn;
        this.table = {};
    }
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            if (this.table[position] == null) {
                this.table[position] = new LinkedList();
            }
            this.table[position].push(new ValuePair(key, value));
            return true;
        }
    return false;
    }

    get(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            let current  = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
            return undefined;
        }
    }

    remove(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) {
                        delete this.table[position];
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }
}

// Linear probing

class HashTableLinearProbing {
    constructor(toStrFn = defaultToString) {
      this.toStrFn = toStrFn;
      this.table = {};
    }
  
    loseloseHashCode(key) {
      if (typeof key === 'number') {
        return key;
      }
      const tableKey = this.toStrFn(key);
      let hash = 0;
      for (let i = 0; i < tableKey.length; i++) {
        hash += tableKey.charCodeAt(i);
      }
      return hash % 37;
    }
  
    hashCode(key) {
      return this.loseloseHashCode(key);
    }
  
    put(key, value) {
      if (key != null && value != null) {
        const position = this.hashCode(key);
        if (this.table[position] == null) {
          this.table[position] = new ValuePair(key, value);
        } else {
          let index = position + 1;
          while (this.table[index] != null) {
            index++;
          }
          this.table[index] = new ValuePair(key, value);
        }
        return true;
      }
      return false;
    }
  
    get(key) {
      const position = this.hashCode(key);
      if (this.table[position] != null) {
        if (this.table[position].key === key) {
          return this.table[position].value;
        }
        let index = position + 1;
        while (this.table[index] != null && this.table[index].key !== key) {
          index++;
        }
        if (this.table[index] != null && this.table[index].key === key) {
          return this.table[position].value;
        }
      }
      return undefined;
    }
  
    remove(key) {
      const position = this.hashCode(key);
      if (this.table[position] != null) {
        if (this.table[position].key === key) {
          delete this.table[position];
          this.verifyRemoveSideEffect(key, position);
          return true;
        }
        let index = position + 1;
        while (this.table[index] != null && this.table[index].key !== key) {
          index++;
        }
        if (this.table[index] != null && this.table[index].key === key) {
          delete this.table[index];
          this.verifyRemoveSideEffect(key, index);
          return true;
        }
      }
      return false;
    }
  
    verifyRemoveSideEffect(key, removedPosition) {
      const hash = this.hashCode(key);
      let index = removedPosition + 1;
      while (this.table[index] != null) {
        const posHash = this.hashCode(this.table[index].key);
        if (posHash <= hash || posHash <= removedPosition) {
          this.table[removedPosition] = this.table[index];
          delete this.table[index];
          removedPosition = index;
        }
        index++;
      }
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    size() {
      return Object.keys(this.table).length;
    }
  
    clear() {
      this.table = {};
    }
  
    getTable() {
      return this.table;
    }
  
    toString() {
      if (this.isEmpty()) {
        return '';
      }
      const keys = Object.keys(this.table);
      let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
      for (let i = 1; i < keys.length; i++) {
        objString = `${objString},{${keys[i]} => ${this.table[
          keys[i]
        ].toString()}}`;
      }
      return objString;
    }
  }

  // Creating better hash functions 
  const djb2HashCode = (key) => {
      const tableKey = this.toStrFn(key);
      let hash = 5381;
      for (let i = 0; i < tableKey.length; i++) {
          hash = (hash * 33) + tableKey.charCodeAt(i);
      }
      return hash % 1013;
  }


  // ES6 Map class
  const map = Map();
  map.set('Gandalf', 'gandalf@email.com');
  map.set('John', 'johnsnow@email.com');
  map.set('Tyrion', 'tyrion@email.com');

  console.log(map.has('Gandalf'));  // true
  console.log(map.size());  // 3
  console.log(map.keys()); // MapIterator {"Gandalf", "John", "Tyrion"}
  console.log(map.values()); // MapIterator {"gandalf@email.com", "johnsnow@email.com"}
  console.log(map.get('Tyrion'));  // tyrion@email.com
  map.delete('John');


// ES6 Weakmap and WeakSet
// These are performance related implementations
const map = new WeakMap();
const ob1 = {name: 'Gandalf'};
const ob2 = {name: 'John'};
const ob3 = {name: 'Tyrion'};

map.set(obj1, 'gandalf@email.com');
map.set(obj2, 'johnsnow@email.com');
map.set(obj3, 'tyrion@email.com');

console.log(map.has(obj1)); //true
console.log(map.get(obj3)); // tyrion@email.com
map.delete(obj2); // 5