const targetElement = document.getElementById("target");

const first = document.createElement("li");
first.textContent = "First item";

const second = document.createElement("li");
second.textContent = "Second item";
second.classList.add("my-item");

const third = document.createElement("li");
third.textContent = "Third item";

targetElement.appendChild(first);
targetElement.appendChild(second);
targetElement.appendChild(third);