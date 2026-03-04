// A Promise is JS's way of handling async tasks
// (things that take time -- API calls, reading files, timers)
// A promise is either: pending -> resolved (success) or rejected (failure)

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data loaded!");
  } else {
    reject("Something went wrong.");
  }
});

myPromise
  .then((result) => console.log(result))  // "Data loaded!"
  .catch((error) => console.log(error));  // runs if rejected

function waitAndGreet() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello after 2 seconds!");
    }, 2000);
  });
}

waitAndGreet().then((msg) => console.log(msg));


// --- async / await (cleaner way to write promises) ---
// async makes a function return a promise
// await pauses until the promise is done

async function loadData() {
  const result = await waitAndGreet(); // waits here
  console.log(result); // "Hello after 2 seconds!"
}

loadData();


// --- fetch (real API call) ---
// fetch returns a promise, so we use await with it

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json(); // convert response to JS object
  console.log(data.name);  // "Leanne Graham"
  console.log(data.email); // "Sincere@april.biz"
}

getUser();


// --- Error Handling with try / catch ---
// Always wrap fetch in try/catch to handle failures

async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const post = await response.json();
    console.log(post.title);
  } catch (error) {
    console.log("Fetch failed:", error.message); // handles network errors too
  }
}

getPost();


// --- Multiple Promises at once (Promise.all) ---
// runs all promises at the same time, waits for ALL to finish

async function getMultiple() {
  try {
    const [user, post] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts/1").then(r => r.json()),
    ]);

    console.log(user.name);  // "Leanne Graham"
    console.log(post.title); // "sunt aut facere..."
  } catch (error) {
    console.log("One of the requests failed:", error.message);
  }
}

getMultiple();

