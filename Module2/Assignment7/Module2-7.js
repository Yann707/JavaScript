let sides = parseInt(prompt("Enter the number of sides on the dice:"));

if (isNaN(sides) || sides < 2) {
    alert("Invalid input.");
} else {
    let result = document.createElement("ul");

    function rollDice(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }

    let roll;
    do {
        roll = rollDice(sides);

        let list = document.createElement("li");
        list.textContent = "Rolled: " + roll;
        result.appendChild(list);
    } while (roll !== sides);

    document.body.appendChild(result);
}
