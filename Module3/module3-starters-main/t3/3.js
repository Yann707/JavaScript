'use strict';
const names = ['John', 'Paul', 'Jones'];

const targetElement = document.getElementById("target");

let list = '';
for (const name of names) {
    list += `<li>${name}</li>`;
}

targetElement.innerHTML = list;
