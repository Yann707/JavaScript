let numbers = [2, 7, 4, 9, 13, 16, 8];

function even(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

let evennumbers = even(numbers);

console.log("Original array:", numbers);
console.log("Even numbers array:", evennumbers);
