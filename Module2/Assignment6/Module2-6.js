let result = document.createElement("ul");

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let roll;
do {
    roll = rollDice();

    let list = document.createElement("li");
    list.textContent = "Rolled: " + roll;
    result.appendChild(list);
} while (roll !== 6);

document.body.appendChild(result);
