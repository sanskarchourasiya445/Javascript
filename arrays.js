
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);
// [10, 20, 30, 40, 50]
console.log(numbers[0]);
//10

console.log(numbers[2]);
//30
numbers[1] = 25;
console.log(numbers);
//[10, 25, 30, 40, 50]
console.log(numbers.length);
// 5

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}



