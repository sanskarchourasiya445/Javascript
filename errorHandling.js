
// ========================
// ERROR HANDLING.JS
// ========================

// --- try / catch ---
// try = run this code
// catch = if it fails, do this instead

try {
  let result = 10 / 0;
  console.log(result);         // Infinity (no crash)

  JSON.parse("invalid json");  // this WILL throw an error
} catch (error) {
  console.log("Error caught:", error.message);
}


// --- finally ---
// finally always runs, whether it succeeded or failed

try {
  console.log("trying...");
  throw new Error("something broke");
} catch (error) {
  console.log("caught:", error.message);
} finally {
  console.log("this always runs"); // cleanup code goes here
}


// --- throw your own error ---
function divide(a, b) {
  if (b === 0) throw new Error("Can't divide by zero!");
  return a / b;
}

try {
  console.log(divide(10, 2));  // 5
  console.log(divide(10, 0));  // throws error
} catch (error) {
  console.log(error.message);  // "Can't divide by zero!"
}


// --- Custom Error class ---
// extend Error to create your own error types

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (age < 0 || age > 120) throw new ValidationError("Age must be 0-120");
  return "Valid age!";
}

try {
  console.log(validateAge(25));   // "Valid age!"
  console.log(validateAge(200));  // throws ValidationError
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
  // "ValidationError: Age must be 0-120"
}
