let year = parseInt(prompt("Enter a year:"));
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

if (isLeapYear) {
  document.write(`${year} is a leap year.`);
} else {
  document.write(`${year} is not a leap year.`);
}
