// lexical scope - where the variable is defined (static scope)
// global scope - defined outside of all blocks
// local scope - defined inside a block

//in a scope you can access variables defined in the scope, or in the scope of the parent scope

// global scope (var1)
//// local scope (var2)
////// local scope (var4)
//// local scope (var3)

let var1 = "varOne";

if (true) {
  console.log(var1);
  let var2 = "varTwo";
  console.log(var2);

  if (true) {
    let var4 = "varFour";
  }
}

if (true) {
  let var3 = "varThree";
}

console.log(var2);
