let Numbers = "";

while (true) {
    let num = parseInt(prompt("Enter a number or enter 0 to stop:"));
    if (num === 0) break;

    Numbers = num + " " + Numbers;
}

console.log("Numbers in descending order:", Numbers);
