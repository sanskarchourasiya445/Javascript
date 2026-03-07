let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello World`;

console.log(singleQuote);
console.log(doubleQuote);
console.log(templateLiteral);

let message = "JavaScript Strings";
console.log("Length:", message.length);

let text = "Programming";

console.log("First Character:", text[0]);
console.log("Last Character:", text[text.length - 1]);

let str = "  Learn JavaScript Easily  ";

console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Trim:", str.trim());
console.log("Slice:", str.slice(2, 7));
console.log("Substring:", str.substring(2, 7));

let msg = "  Learn JavaScript  ";
console.log(msg.includes("Java")); // true
console.log(msg.startsWith(" "));
console.log(msg.endsWith(" "));

let sentence = "I love Java";
console.log(sentence.replace("Java", "JavaScript"));

let skills = "HTML,CSS,JavaScript";
let arr = skills.split(",");
console.log(arr);


let star = "*";
console.log(star.repeat(5));

let a = "apple";
let b = "apple";
console.log(a === b); // true

let numStr = "100";
let num = Number(numStr);
console.log(num, typeof num);

let score = 90;
let scoreStr = score.toString();
console.log(scoreStr, typeof scoreStr);



/* A collection of useful JavaScript string functions
 */

/**
 * Capitalize the first letter of a string
 */
function capitalizeFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverse a string
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * Check if a string is a palindrome
 */
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

/**
 * Count number of words in a string
 */
function wordCount(str) {
    if (!str.trim()) return 0;
    return str.trim().split(/\s+/).length;
}

/**
 * Convert string to camelCase
 */
function toCamelCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("");
}

/**
 * Truncate a string to a specific length
 */
function truncateString(str, length) {
    if (str.length <= length) return str;
    return str.slice(0, length) + "...";
}

/**
 * Check if string contains a substring
 */
function containsSubstring(str, sub) {
    return str.includes(sub);
}

module.exports = {
    capitalizeFirstLetter,
    reverseString,
    isPalindrome,
    wordCount,
    toCamelCase,
    truncateString,
    containsSubstring
};