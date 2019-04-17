let HashTable = require('./../HashTable');

let h1 = new HashTable.HashTable();
console.log();
console.log("h1 buckets ? 32: ", h1.buckets.length);

h1 = new HashTable.HashTable(64);
console.log("h1 buckets ? 64: ", h1.buckets.length);


h1 = new HashTable.HashTable();
console.log("expect(hashTable.hash('a')).toBe(1)", h1.hash('a'));
console.log("expect(hashTable.hash('b')).toBe(2)", h1.hash('b'));
console.log("expect(hashTable.hash('abc')).toBe(6)", h1.hash('abc'));

h1 = new HashTable.HashTable(3); //!!!!!!!!!!!!
console.log("expect(hashTable.hash('a')).toBe(1)", h1.hash('a'));
console.log("expect(hashTable.hash('b')).toBe(2)", h1.hash('b'));
console.log("expect(hashTable.hash('c')).toBe(0)", h1.hash('c'));
console.log("expect(hashTable.hash('d')).toBe(1)", h1.hash('d'));

h1.set('a', 'sky-old');
h1.set('a', 'sky');
h1.set('b', 'sea');
h1.set('c', 'earth');
h1.set('d', 'ocean');

console.log("expect(hashTable.has('x')).toBe(false)", h1.has('x'));
console.log("expect(hashTable.has('b')).toBe(true)", h1.has('b'));
console.log("expect(hashTable.has('c')).toBe(true)", h1.has('c'));

//     const stringifier = value => `${value.key}:${value.value}`;


//     expect(hashTable.buckets[0].toString(stringifier)).toBe('c:earth');
//     expect(hashTable.buckets[1].toString(stringifier)).toBe('a:sky,d:ocean');
//     expect(hashTable.buckets[2].toString(stringifier)).toBe('b:sea');

//     expect(hashTable.get('a')).toBe('sky');
//     expect(hashTable.get('d')).toBe('ocean');
//     expect(hashTable.get('x')).not.toBeDefined();

//     hashTable.delete('a');

//     expect(hashTable.delete('not-existing')).toBeNull();

//     expect(hashTable.get('a')).not.toBeDefined();
//     expect(hashTable.get('d')).toBe('ocean');

//     hashTable.set('d', 'ocean-new');
//     expect(hashTable.get('d')).toBe('ocean-new');
//   });

//   it('should be possible to add objects to hash table', () => {
//     const hashTable = new HashTable();

//     hashTable.set('objectKey', { prop1: 'a', prop2: 'b' });

//     const object = hashTable.get('objectKey');
//     expect(object).toBeDefined();
//     expect(object.prop1).toBe('a');
//     expect(object.prop2).toBe('b');
//   });

//   it('should track actual keys', () => {
//     const hashTable = new HashTable(3);

//     hashTable.set('a', 'sky-old');
//     hashTable.set('a', 'sky');
//     hashTable.set('b', 'sea');
//     hashTable.set('c', 'earth');
//     hashTable.set('d', 'ocean');

//     expect(hashTable.getKeys()).toEqual(['a', 'b', 'c', 'd']);
//     expect(hashTable.has('a')).toBe(true);
//     expect(hashTable.has('x')).toBe(false);

//     hashTable.delete('a');

//     expect(hashTable.has('a')).toBe(false);
//     expect(hashTable.has('b')).toBe(true);
//     expect(hashTable.has('x')).toBe(false);
//   });
// });
