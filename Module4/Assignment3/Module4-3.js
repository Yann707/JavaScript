let dogs = [];

for (let i = 0; i < 6; i++) {
    dogs.push(prompt("Enter the name of dog " + (i + 1) + ":"));
}

dogs.sort().reverse();

let listHtml = "<ul>";
for (let i = 0; i < dogs.length; i++) {
    listHtml += "<li>" + dogs[i] + "</li>";
}
listHtml += "</ul>";
document.body.innerHTML += listHtml;
