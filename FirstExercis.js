//let restricts the scope of the variable to the current block
// comparing var with let
// WHEN using var for declaring a variable THEN the scope of the variable is the surrounding function

var varX
if (true) {
   varX = true;
}
assert.equal(varX, true);

// WHEN declaring a variable using let THEN the scope is limited to the surrounding block (enclosed in { and })
//   let  letX = true;


if (true) {
  let  letX = true;
}
assert.throws(() => letX, ReferenceError);

// WHEN using let in a for loop THEN the variable is only "visible" inside this loop

let obj = {x: 1};
for (let key in obj) {
    
}
assert.throws(() => key, ReferenceError);
// WHEN embedding a let variable in a block (using curly braces) THEN the variable is not "visible" outside of it
let objj = {x: 1};
for (let key in objj) {
    
}
assert.throws(() => key, ReferenceError);

// WHEN declaring a variable with let without a value THEN this variable has the value undefined
let variable;
assert.strictEqual(variable, undefined);