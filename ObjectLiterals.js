// Object literals are used to store keyed collection & complex entities
// properties => (key,value) pair
// objects are collection of properties

let student = {
  name: "Sanskar",
  age: 20,
  marks: 94,
  city: "Indore"
};

// --- Accessing Properties ---
student.name;       // "Sanskar"  (dot notation)
student['marks'];   // 94         (bracket notation)
student['city'];    // "Indore"
student.age;        // 20

// --- Add / Update / Delete ---
student.grade = "A";    // add new property
student.marks = 97;     // update existing property
delete student.city;    // remove a property
console.log(student);

// --- Methods (functions inside objects) ---
const user = {
  username: "coder123",
  role: "Developer",
  login: function () {
    return `${this.username} has logged in`; // 'this' refers to the object
  }
};
console.log(user.login()); // "coder123 has logged in"

// --- Nested Objects ---
const laptop = {
  brand: "Dell",
  specs: {
    ram: "16GB",
    storage: "512GB SSD",
    processor: "Intel i5"
  }
};
console.log(laptop.specs.ram);        // "16GB"
console.log(laptop.specs.processor);  // "Intel i5"

// --- Loop through an object (for...in) ---
for (let key in student) {
  console.log(key + " : " + student[key]);
}

// --- Useful Object Methods ---
console.log(Object.keys(student));    // ["name", "age", "marks", "grade"]
console.log(Object.values(student));  // ["Sanskar", 20, 97, "A"]
console.log(Object.entries(student)); // [["name","Sanskar"], ["age",20] ...]

// --- Destructuring (extract values into variables) ---
const { name, age } = student;
console.log(name, age); // "Sanskar", 20

// rename while destructuring
const { name: studentName } = student;
console.log(studentName); // "Sanskar"

// --- Spread (copy or merge objects) ---
const copy = { ...student };           // clone
const updated = { ...student, city: "Mumbai" }; // add/override a field
console.log(updated);

// --- Shorthand property (when variable name = key name) ---
const brand = "HP";
const price = 60000;
const newLaptop = { brand, price }; // same as { brand: brand, price: price }
console.log(newLaptop);

// --- Optional Chaining (?.) ---
// safely access nested values without crashing
console.log(laptop.specs?.ram);     // "16GB"
console.log(laptop.warranty?.year); // undefined (no error!)

