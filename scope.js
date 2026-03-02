var globalVar = "I'm global (var)";

function varExample() {
  var insideFunction = "I'm inside the function";
  console.log(insideFunction); // ✅ accessible

  if (true) {
    var blockVar = "I'm in an if-block (var)";
    console.log(blockVar); // ✅ accessible
  }

  console.log(blockVar); // ✅ still accessible! (var ignores block scope)
}

varExample();
// console.log(insideFunction); // ❌ ReferenceError - outside function

let globalLet = "I'm global (let)";

function letExample() {
  let insideLet = "I'm inside the function";

  if (true) {
    let blockLet = "I'm in an if-block (let)";
    console.log(blockLet); // ✅ accessible inside block
  }

  // console.log(blockLet); // ❌ ReferenceError - block scoped!
  console.log(insideLet);  // ✅ accessible in function
}

const PI = 3.14159;
// PI = 3; // ❌ TypeError - cannot reassign a const

// BUT objects/arrays declared with const can be mutated
const person = { name: "Riya", age: 25 };
person.age = 26;       // ✅ mutating the object is fine
person.city = "Delhi"; // ✅ adding a property is fine
// person = {};        // ❌ reassigning the binding is NOT fine

const fruits = ["apple", "mango"];
fruits.push("banana"); // ✅ mutating array is fine
// fruits = [];        // ❌ reassigning is not fine

console.log(person);
console.log(fruits);
