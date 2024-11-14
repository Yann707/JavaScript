let numbers = [];

while (true) {
    let num = parseInt(prompt("Enter a number:"));

    if (numbers.includes(num)) {
        console.log("This number has already been entered.");
        break;
    }

    numbers.push(num);
}

numbers.sort((a, b) => a - b);
console.log("All numbers in ascending order:", numbers);
