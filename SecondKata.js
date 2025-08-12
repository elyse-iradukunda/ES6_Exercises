// const is like let plus read-only
// scalar values are read-only
// e.g. a number
const constNum = 0;
assert.equal(constNum, 0);


// or a string

const constString = 'I am a const';

assert.equal(constString, 'I am a const');

// complex types are NOT fully read-only
// array`s items can be changed
// arr[0] = 42;

const obj = {x: 1};
obj.x = 3;
assert.equal(obj.x, 3);


// object`s can be modified
// obj.x = 3;

const obj = {x: 1};
obj.x = 3;
assert.equal(obj.x, 3);