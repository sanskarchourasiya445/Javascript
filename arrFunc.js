
let numbers = [10, 20, 30, 40, 50];

// push() – add element at end
numbers.push(60);
console.log("After push:", numbers);

// pop() – remove last element
numbers.pop();
console.log("After pop:", numbers);

// unshift() – add element at beginning
numbers.unshift(5);
console.log("After unshift:", numbers);

// shift() – remove first element
numbers.shift();
console.log("After shift:", numbers);

// length – array size
console.log("Length:", numbers.length);

// forEach() – iterate through array
console.log("forEach output:");
numbers.forEach(function (num) {
  console.log(num);
});

// map() – create new array
let doubled = numbers.map(function (num) {
  return num * 2;
});
console.log("Doubled:", doubled);

// filter() – filter elements
let greaterThan30 = numbers.filter(function (num) {
  return num > 30;
});
console.log("Greater than 30:", greaterThan30);

// includes() – check value existence
console.log("Includes 25:", numbers.includes(25));
console.log("Includes 100:", numbers.includes(100));

// indexOf() – find index
console.log("Index of 30:", numbers.indexOf(30));

// slice() – extract part of array
let sliced = numbers.slice(1, 4);
console.log("Slice (1,4):", sliced);

// splice() – remove/add elements
numbers.splice(2, 1);
console.log("After splice:", numbers);

// join() – array to string
console.log("Joined:", numbers.join(" - "));

// reverse() – reverse array
numbers.reverse();
console.log("Reversed:", numbers);

// sort() – sort numbers
numbers.sort(function (a, b) {
  return a - b;
});
console.log("Sorted:", numbers);

// find() – first matching element
let found = numbers.find(function (num) {
  return num > 30;
});
console.log("First > 30:", found);

// findIndex() – index of first match
let foundIndex = numbers.findIndex(function (num) {
  return num > 30;
});
console.log("Index of first > 30:", foundIndex);

// some() – any match
console.log("Any > 40:", numbers.some(num => num > 40));

// every() – all match
console.log("All > 5:", numbers.every(num => num > 5));

// reduce() – sum of array
let sum = numbers.reduce(function (acc, num) {
  return acc + num;
}, 0);
console.log("Sum:", sum);