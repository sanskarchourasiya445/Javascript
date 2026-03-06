// Using https://dog.ceo/dog-api/ — free, no API key needed!
// FETCH (built-in)
// --- GET a random dog image ---
async function getRandomDog() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  console.log(data.message); // image URL like: https://images.dog.ceo/breeds/...
}
getRandomDog();

// --- with try/catch 
async function getSafeDog() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    console.log("Dog pic:", data.message);
  } catch (error) {
    console.log("Fetch failed:", error.message);
  }
}
getSafeDog();

// using axios (npm install axios)
const axios = require("axios");

// --- GET a random dog ---
async function axiosRandomDog() {
  const response = await axios.get("https://dog.ceo/api/breeds/image/random");
  console.log(response.data.message); // axios wraps result in .data
}
axiosRandomDog();

// --- with try/catch ---
async function axiosSafeDog() {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log("Dog pic:", response.data.message);
  } catch (error) {
    console.log("Axios failed:", error.message);
  }
}
axiosSafeDog();

// FETCH vs AXIOS — quick difference

// fetch:
//   - built-in, no install needed
//   - need .json() to parse response manually
//   - won't throw error on 404 (check response.ok yourself)

// axios:
//   - npm install axios
//   - auto-parses JSON, result is in response.data
//   - throws error automatically on 404/500
