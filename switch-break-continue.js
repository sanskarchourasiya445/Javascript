// 1. Switch Statement Example
let dayNumber = 5;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day Number");
}


// Break stops the loop immediately when condition is met

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Loop stopped at:", i);
        break; // exits the loop
    }
    console.log("Value:", i);
}

// Continue skips the current iteration

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Skipping:", i);
        continue; // skips this iteration
    }
    console.log("Number:", i);
}

