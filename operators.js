let a = 10;
let b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.33
console.log("Modulus:", a % b);         // 1
console.log("Exponentiation:", a ** b); // 1000

let x = 5;

x += 2;  // x = x + 2
console.log("+= :", x);

x -= 1;  // x = x - 1
console.log("-= :", x);

x *= 3;
console.log("*= :", x);

x /= 2;
console.log("/= :", x);

x %= 4;
console.log("%= :", x);

let num1 = 10;
let num2 = "10";

console.log("== :", num1 == num2); 
console.log("=== :", num1 === num2);
console.log("!= :", num1 != num2);
console.log("!== :", num1 !== num2);
console.log("> :", num1 > 5);
console.log("< :", num1 < 20);
console.log(">= :", num1 >= 10);
console.log("<= :", num1 <= 9);

let isLoggedIn = true;
let hasSubscription = false;

console.log("AND (&&):", isLoggedIn && hasSubscription);
console.log("OR (||):", isLoggedIn || hasSubscription);
console.log("NOT (!):", !isLoggedIn);

let count = 5;

console.log("Post Increment:", count++); // prints 5, then becomes 6
console.log("After Post Increment:", count);

console.log("Pre Increment:", ++count); // becomes 7, then prints

console.log("Post Decrement:", count--);
console.log("Pre Decrement:", --count);

let age = 20;

let result = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary Result:", result);

let value = "Hello";

console.log("Type of value:", typeof value);
console.log("Is Array:", Array.isArray([1,2,3]));
