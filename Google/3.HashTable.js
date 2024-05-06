class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
  }
  // Hash function to compute the index
  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size;
  }

  // Insert key-value pair into the hash table
  insert(key, value) {
    const index = this.hash(key);
    this.buckets[index].push({ key, value });
  }

  // Retrieve value associated with a key
  get(key) {
    const index = this.hash(key);
    for (const pair of this.buckets[index]) {
      if (pair.key === key) {
        return pair.value;
      }
    }
    return undefined;
  }

  // Remove key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    this.buckets[index] = this.buckets[index].filter(
      (pair) => pair.key !== key,
    );
  }
}

// Example usage:
const myHashTable = new HashTable();
myHashTable.insert('apple', 5);
myHashTable.insert('banana', 10);
myHashTable.insert('orange', 15);

console.log(myHashTable.get('apple')); // Output: 5
console.log(myHashTable.get('banana')); // Output: 10
console.log(myHashTable.get('orange')); // Output: 15

myHashTable.remove('banana');
console.log(myHashTable.get('banana')); // Output: undefined (removed)

