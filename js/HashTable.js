//import LinkedList from '../linked-list/LinkedList';
let LinkedList = require('./LinkedList');

//Stack.prototype.isEmpty = function() {
//  return !this.LinkedList.head;
//}



// Hash table size directly affects on the number of collisions.
// The bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions
// are being handled.
const defaultHashTableSize = 32;

class HashTable {
  /**
   * @param {number} hashTableSize
   */
  constructor(hashTableSize = defaultHashTableSize) {
    // Create hash table of certain size and fill each bucket with empty linked list.
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList.LinkedList());

    // Just to keep track of all actual keys in a fast way.
    this.keys = {};
  }
}

  /**
   * Converts key string to hash number.
   *
   * @param {string} key
   * @return {number}
   */
//  hash(key) {
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

  /**
   * @param {string} key
   * @param {*} value
   */
//  set(key, value) {
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

  /**
   * @param {string} key
   * @return {*}
   */
//  delete(key) {
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

  /**
   * @param {string} key
   * @return {*}
   */
//  get(key) {
HashTable.prototype.get = function(key) {
  const bucketLinkedList = this.buckets[this.hash(key)];
  const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

  return node ? node.value.value : undefined;
}

  /**
   * @param {string} key
   * @return {boolean}
   */
//  has(key) {
HashTable.prototype.has = function(key) {
  return Object.hasOwnProperty.call(this.keys, key);
}

  /**
   * @return {string[]}
   */
//  getKeys() {
HashTable.prototype.getKeys = function() {
  return Object.keys(this.keys);
}


if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
    module.exports.HashTable = HashTable;

    console.log(module.filename);
    console.log(module.id);
    console.log(module.exports);
}

