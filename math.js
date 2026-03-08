// Rounding Methods

console.log(Math.round(4.6));
// 5

console.log(Math.ceil(4.9));
// 5

console.log(Math.floor(4.9));
// 4

console.log(Math.trunc(4.7));
// 4

console.log(Math.sign(-4));
// -1


// Power and Roots

console.log(Math.pow(8, 2));
// 64

console.log(Math.sqrt(64));
// 8

console.log(Math.cbrt(27));
// 3


// Absolute Value

console.log(Math.abs(-4.7));
// 4.7


// Minimum and Maximum

console.log(Math.min(0, 172, -8, -200));
// -200

console.log(Math.max(0, 150, 30, -200));
// 150


// Constants

console.log(Math.PI);
// 3.141592653589793

console.log(Math.E);
// Euler's number


// Random Numbers

console.log(Math.random());
// Random number between 0 and 1

console.log(Math.floor(Math.random() * 10) + 1);
// Random integer between 1 and 10


// Random number between a range

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBetween(1, 100));
// Random number between 1 and 100


// Logarithmic Functions

console.log(Math.log(10));
// Natural logarithm

console.log(Math.log10(100));
// Base 10 logarithm


// Trigonometric Functions

console.log(Math.sin(0));
console.log(Math.cos(0));
console.log(Math.tan(0));