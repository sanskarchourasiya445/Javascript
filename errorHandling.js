try {
  const result = 10 / 0;
  console.log("Division result:", result); // Infinity (not an error)

  // This will throw an error
  JSON.parse("invalid json");

} catch (error) {
  console.error("❌ Error caught:", error.message);
}

// finally runs no matter what
try {
  console.log("\nTrying something risky...");
  throw new Error("Something broke!");

} catch (error) {
  console.error("Caught error:", error.message);

} finally {
  console.log("🧹 Cleanup complete (finally always runs)");
}


// Throwing your own errors

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log("\nDivide result:", divide(10, 2));
  console.log("Divide result:", divide(10, 0));

} catch (error) {
  console.error("Division error:", error.message);
}


// Custom Error Classes

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (age < 0 || age > 120) {
    throw new ValidationError("Age must be between 0 and 120");
  }

  return "Valid age!";
}

try {
  console.log("\nAge check:", validateAge(25));
  console.log("Age check:", validateAge(200));

} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}


// Async Error Handling (important in APIs)
async function fetchData() {
  try {
    throw new Error("Network request failed");

  } catch (error) {
    console.error("\nAsync error:", error.message);
  }
}

fetchData();


// Rethrowing errors (advanced concept)

function processPayment(amount) {
  try {
    if (amount <= 0) {
      throw new Error("Invalid payment amount");
    }

    console.log("Payment processed:", amount);

  } catch (error) {
    console.error("Payment error:", error.message);

    // rethrow error so higher level can handle it
    throw error;
  }
}

try {
  processPayment(-100);
} catch (error) {
  console.error("System level handler:", error.message);
}
