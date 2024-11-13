if (confirm("Should I calculate the square root?")) {
  let number = parseFloat(prompt("Enter a number:"));
  if (number >= 0) {
    document.write(`Square root: ${Math.sqrt(number)}`);
  } else {
    document.write("The square root of a negative number is not defined.");
  }
} else {
  document.write("The square root is not calculated.");
}
