let words = ["Johnny", "DeeDee", "Joey", "Marky"];

function concat(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

let concatenated = concat(words);

let resultParagraph = document.createElement("p");
resultParagraph.textContent = "String: " + concatenated;
document.body.appendChild(resultParagraph);
