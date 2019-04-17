let LinkedList = require('./LinkedList');

// Hash table size directly affects on the number of collisions.
// The bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions
// are being handled.
const defaultHashTableSize = 32;

class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    // Create hash table of certain size and fill each bucket with empty linked list.
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList.LinkedList());

    // Just to keep track of all actual keys in a fast way.
    this.keys = {};
  }
}

HashTable.prototype.hash = function(key) {
  // For simplicity reasons we will just use character codes sum of all characters of the key
  // to calculate the hash.
  //
  // But you may also use more sophisticated approaches like polynomial string hash to reduce the
  // number of collisions:
  //
  // hash = charCodeAt(0) * PRIME^(n-1) + charCodeAt(1) * PRIME^(n-2) + ... + charCodeAt(n-1)
  //
  // where charCodeAt(i) is the i-th character code of the key, n is the length of the key and
  // PRIME is just any prime number like 31.
  const hash = Array.from(key).reduce(
    (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
    0,
  );

  // Reduce hash number so it would fit hash table size.
  return hash % this.buckets.length;
}

HashTable.prototype.set = function(key, value) {
  const keyHash = this.hash(key);
  this.keys[key] = keyHash;
  const bucketLinkedList = this.buckets[keyHash];
  const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });
  if (!node) {
    // Insert new node.
    bucketLinkedList.append({ key, value });
  } else {
    // Update value of existing node.
    node.value.value = value;
  }
}

HashTable.prototype.delete = function(key) {
  const keyHash = this.hash(key);
  delete this.keys[key];
  const bucketLinkedList = this.buckets[keyHash];
  const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });
  if (node) {
    return bucketLinkedList.delete(node.value);
  }
  return null;
}

HashTable.prototype.get = function(key) {
  const bucketLinkedList = this.buckets[this.hash(key)];
  const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });
  return node ? node.value.value : undefined;
}

HashTable.prototype.has = function(key) {
  return Object.hasOwnProperty.call(this.keys, key);
}

HashTable.prototype.getKeys = function() {
  return Object.keys(this.keys);
}

if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
  module.exports.HashTable = HashTable;

  console.log(module.filename);
  console.log(module.id);
  console.log(module.exports);
}

