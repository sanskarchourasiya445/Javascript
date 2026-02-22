let numbers = [10, 20, 30, 40, 50];
numbers.push(60);
console.log(numbers);
//[10, 25, 30, 40, 50, 60]
numbers.pop();
console.log(numbers);
//[10, 25, 30, 40, 50]
numbers.unshift(5);
console.log(numbers);
//[5, 10, 25, 30, 40, 50]
numbers.shift();
console.log(numbers);
//[10, 25, 30, 40, 50]

numbers.forEach(function(num) {
    console.log(num);
});
/*
10
25
30
40
50
*/

let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled);
//[20, 50, 60, 80, 100]

let greaterThan30 = numbers.filter(function(num) {
    return num > 30;
});
console.log(greaterThan30);
//[40, 50]
console.log(numbers.includes(25));
//true
