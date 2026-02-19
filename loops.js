// FOR LOOP - When you want to repeat code a specific number of times
for (let i = 0; i < 3; i++) {
    console.log("Repeat this 3 times");
}

// WHILE LOOP - When you want to repeat until a condition becomes false
let isRunning = true;
let count = 0;
while (isRunning) {
    count++;
    console.log("Running... " + count);
    if (count === 3) {
        isRunning = false; // Stop after 3 times
    }
}

// DO-WHILE LOOP - Same as while, but always runs at least once
let x = 0;
do {
    console.log("This runs at least once");
    x++;
} while (x < 3);


// infinite loop - Ending condition(always true) is missing 
for(let i = 1 ; i <= 5 ; i--){
    //code
}

for(let i = 1 ; i > 0 ; i++){
    //code
}
for(let i = 1 ;   ;i++){

}
