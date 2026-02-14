var firstName = "Sanskar";
let lastName = "Chourasiya";
const country = "India";
var age = 21;
let price = 99.99;
const year = 2026;

var isStudent = true;
let hasJob = false;

var middleName = null;

let phoneNumber;

var skills = ["JavaScript", "Python", "Java", "C++"];

let marks = [85, 90, 78, 92];

let user = {
  name: "Sanskar",
  age: 21,
  isStudent: true,
  skills: ["JS", "Python"],
};

function greet(name) {
  return "Hello " + name;
}

const uniqueId = Symbol("id");

const bigNumber = 1234567890123456789012345678901234567890n;

console.log(typeof firstName);   // string
console.log(typeof age);         // number
console.log(typeof isStudent);   // boolean
console.log(typeof middleName);  // object (JS bug)
console.log(typeof phoneNumber); // undefined
console.log(typeof skills);      // object
console.log(typeof user);        // object
console.log(typeof greet);       // function
console.log(typeof uniqueId);    // symbol
console.log(typeof bigNumber);   // bigint
