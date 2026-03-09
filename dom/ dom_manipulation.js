/*
The DOM (Document Object Model) allows JavaScript to interact
with HTML elements. We can select elements, modify them,
and respond to user events.
*/


// Select element by ID
const title = document.getElementById("title");

// Select element by class name
const items = document.getElementsByClassName("item");

// Select element by tag name
const paragraphs = document.getElementsByTagName("p");

console.log(title);
console.log(items);
console.log(paragraphs);


// Select the first matching element
const firstItem = document.querySelector(".item");

// Select all matching elements
const allItems = document.querySelectorAll(".item");

console.log(firstItem);
console.log(allItems);



title.textContent = "DOM Manipulation Example";
title.style.color = "blue";


const box = document.querySelector(".box");

// Add a class
box.classList.add("active");

// Remove a class
box.classList.remove("hidden");

// Toggle class (add if not present, remove if present)
box.classList.toggle("highlight");


const button = document.querySelector("#btn");

button.addEventListener("click", function() {
    console.log("Button clicked!");

    // Change text when clicked
    button.textContent = "Clicked!";
});

const input = document.querySelector("#name");

input.addEventListener("input", function() {
    console.log("User typing:", input.value);
});