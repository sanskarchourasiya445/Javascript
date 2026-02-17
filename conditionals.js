// 1. if statement
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

// 2. if...else statement
let number = 7;

if (number % 2 === 0) {
    console.log("Number is Even");
} else {
    console.log("Number is Odd");
}

// 3. if...else if...else statement
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

// 4. Nested if statement
let username = "admin";
let password = "1234";

if (username === "admin") {
    if (password === "1234") {
        console.log("Login Successful");
    } else {
        console.log("Incorrect Password");
    }
} else {
    console.log("User not found");
}

// 5. Ternary Operator
let isLoggedIn = true;

let status = isLoggedIn ? "Welcome Back!" : "Please Login";
console.log(status);

