// ========================
// FETCH.JS
// ========================
// Using https://dog.ceo/dog-api/ — free, no API key needed!


// ================================
// FETCH (built-in, no install needed)
// ================================

// --- GET a random dog image ---
async function getRandomDog() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  console.log(data.message); // image URL like: https://images.dog.ceo/breeds/...
}
getRandomDog();


// --- GET multiple random dogs ---
async function getMultipleDogs() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/3");
  const data = await response.json();
  console.log(data.message); // array of 3 image URLs
}
getMultipleDogs();


// --- GET dogs by breed ---
async function getDogByBreed(breed) {
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
  const data = await response.json();
  console.log(`${breed} image:`, data.message);
}
getDogByBreed("labrador");
getDogByBreed("husky");


// --- GET all breeds list ---
async function getAllBreeds() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  console.log(Object.keys(data.message)); // array of all breed names
}
getAllBreeds();


// --- with try/catch (always do this!) ---
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


// ================================
// AXIOS (npm install axios)
// ================================
const axios = require("axios");

// --- GET a random dog ---
async function axiosRandomDog() {
  const response = await axios.get("https://dog.ceo/api/breeds/image/random");
  console.log(response.data.message); // axios wraps result in .data
}
axiosRandomDog();


// --- GET dogs by breed ---
async function axiosDogByBreed(breed) {
  const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
  console.log(`${breed}:`, response.data.message);
}
axiosDogByBreed("poodle");


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


// ================================
// FETCH vs AXIOS — quick difference
// ================================

// fetch:
//   - built-in, no install needed
//   - need .json() to parse response manually
//   - won't throw error on 404 (check response.ok yourself)

// axios:
//   - npm install axios
//   - auto-parses JSON, result is in response.data
//   - throws error automatically on 404/500
