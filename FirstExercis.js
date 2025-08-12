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
