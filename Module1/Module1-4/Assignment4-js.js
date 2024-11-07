let name = prompt("Enter your name:");
let house = Math.floor(Math.random() * 4) + 1;

let assignedHouse;
switch (house) {
  case 1:
    assignedHouse = "Gryffindor";
    break;
  case 2:
    assignedHouse = "Slytherin";
    break;
  case 3:
    assignedHouse = "Hufflepuff";
    break;
  case 4:
    assignedHouse = "Ravenclaw";
    break;
}

document.write(`${name}, you are ${assignedHouse}.`);
