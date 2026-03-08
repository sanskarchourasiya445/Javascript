// Selecting element by ID
const title = document.getElementById("title");
console.log(title);


// Selecting elements by class name
const items = document.getElementsByClassName("item");
console.log(items);


// Selecting elements by tag name
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);


// Selecting the first matching element using querySelector
const firstButton = document.querySelector(".btn");
console.log(firstButton);


// Selecting all matching elements using querySelectorAll
const allButtons = document.querySelectorAll(".btn");
console.log(allButtons);


// Selecting nested elements
const container = document.querySelector(".container");
const nestedItem = container.querySelector(".item");
console.log(nestedItem);


// Loop through multiple elements
const listItems = document.querySelectorAll("li");

listItems.forEach(function(item) {
    console.log(item.textContent);
});


// Changing text content
const heading = document.getElementById("heading");

if (heading) {
    heading.textContent = "DOM Manipulation Example";
}


// Changing style of an element
const box = document.querySelector(".box");

if (box) {
    box.style.backgroundColor = "lightblue";
    box.style.padding = "10px";
}
