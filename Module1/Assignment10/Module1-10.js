let numDice = parseInt(prompt("Enter the number of dice:"));
let targetSum = parseInt(prompt("Enter the target sum:"));
let trials = 10000;
let successCount = 0;

for (let i = 0; i < trials; i++) {
    let sum = 0;
    for (let j = 0; j < numDice; j++) {
        sum += Math.floor(Math.random() * 6) + 1;  // Roll each die and add the result to sum
    }
    if (sum === targetSum) {
        successCount++;  // Count if the sum matches the target
    }
}

let probability = (successCount / trials) * 100;
document.write(`Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%`);
