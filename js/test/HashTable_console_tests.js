let HashTable = require('./../HashTable');

let h1 = new HashTable.HashTable();
console.log();
console.log("h1 buckets ? 32: ", h1.buckets.length);

h1 = new HashTable.HashTable(64);
console.log("h1 buckets ? 64: ", h1.buckets.length);


h1 = new HashTable.HashTable();
console.log("expect(h1.hash('a')).toBe(1)", h1.hash('a'));
console.log("expect(h1.hash('b')).toBe(2)", h1.hash('b'));
console.log("expect(h1.hash('abc')).toBe(6)", h1.hash('abc'));

h1 = new HashTable.HashTable(3); //!!!!!!!!!!!!
console.log("expect(h1.hash('a')).toBe(1)", h1.hash('a'));
console.log("expect(h1.hash('b')).toBe(2)", h1.hash('b'));
console.log("expect(h1.hash('c')).toBe(0)", h1.hash('c'));
console.log("expect(h1.hash('d')).toBe(1)", h1.hash('d'));

h1.set('a', 'sky-old');
h1.set('a', 'sky');
h1.set('b', 'sea');
h1.set('c', 'earth');
h1.set('d', 'ocean');

console.log("expect(h1.has('x')).toBe(false)", h1.has('x'));
console.log("expect(h1.has('b')).toBe(true)", h1.has('b'));
console.log("expect(h1.has('c')).toBe(true)", h1.has('c'));

const stringifier = value => `${value.key}:${value.value}`;

console.log("expect(h1.buckets[0].toString(stringifier)).toBe('c:earth')", h1.buckets[0].toString(stringifier));
console.log("expect(h1.buckets[1].toString(stringifier)).toBe('a:sky,d:ocean')", h1.buckets[1].toString(stringifier));
console.log("expect(h1.buckets[2].toString(stringifier)).toBe('b:sea')", h1.buckets[2].toString(stringifier));

console.log("expect(h1.get('a')).toBe('sky')", h1.get('a'));
console.log("expect(h1.get('d')).toBe('ocean')", h1.get('d'));
console.log("expect(h1.get('x')).not.toBeDefined()", h1.get('x'));

console.log("h1.delete('a')", h1.delete('a'));
console.log("expect(h1.delete('not-existing')).toBeNull()", h1.delete('not-existing'));


console.log("expect(h1.get('a')).not.toBeDefined()", h1.get('a'));
console.log("expect(h1.get('d')).toBe('ocean')", h1.get('d'));
console.log("h1.set('d', 'ocean-new')", h1.set('d', 'ocean-new'));
console.log("expect(h1.get('d')).toBe('ocean-new')", h1.get('d'));


h1 = new HashTable.HashTable();
console.log("h1.set('objectKey', { prop1: 'a', prop2: 'b' })", h1.set('objectKey', { prop1: 'a', prop2: 'b' }));

const obj = h1.get('objectKey');
console.log("expect(object).toBeDefined()", obj);
console.log("expect(object.prop1).toBe('a')", obj.prop1);
console.log("expect(object.prop2).toBe('b')", obj.prop2);


h1 = new HashTable.HashTable(3);

h1.set('a', 'sky-old');
h1.set('a', 'sky');
h1.set('b', 'sea');
h1.set('c', 'earth');
h1.set('d', 'ocean');

console.log("expect(h1.getKeys()).toEqual(['a', 'b', 'c', 'd'])", h1.getKeys());
console.log("expect(h1.has('a')).toBe(true)", h1.has('a'));
console.log("expect(h1.has('x')).toBe(false)", h1.has('x'));

console.log("h1.delete('a')", h1.delete('a'));

console.log("expect(h1.has('a')).toBe(false)", h1.has('a'));
console.log("expect(h1.has('b')).toBe(true)", h1.has('b'));
console.log("expect(h1.has('x')).toBe(false)", h1.has('x'));
