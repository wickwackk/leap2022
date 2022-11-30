let name = `""jamie""`;
let myNumber1 = 1;
let myNumber2 = 3;
let myNumber3 = myNumber1 + myNumber2;
myNumber4 = 6;
console.log(myNumber3);
console.log(name);

//Prompt hurvuuleh
let number = "15";
console.log(typeof number);
let realNumber = parseInt(number);
console.log(typeof realNumber);

//dsfg
let num1 = parseFloat(prompt("Enter first number"));
let num2 = parseFloat(prompt("Enter second number"));
alert("2 toonii niilber n: " + (num1 + num2));
alert("2 toog huvaagad uldegdel n: " + (num1 % num2));

// Boolean logic
let age = 18;
if (age >= 21) {
  console.log("Nasand hursen");
} else if (age > 11) {
  console.log("Usvur nas");
} else {
  console.log("huuhed");
}

// exercise
let day = 8;
let dayName;
if (day == 1) {
  dayName = "Monday";
} else if (day == 2) {
  dayName = "Tuesday";
} else if (day == 3) {
  dayName = "Wednesday";
} else if (day == 4) {
  dayName = "Thursday";
} else if (day == 5) {
  dayName = "Friday";
} else if (day == 6) {
  dayName = "Saturday";
} else if (day == 7) {
  dayName = "Sunday";
} else {
  dayName = "error";
}
console.log("Tanii orulsan udur bol: " + dayName);

// Switch case
let weekday = 1;

switch (weekday) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Not a day");
}
// or

if (
  weekday == 1 ||
  weekday == 2 ||
  weekday == 3 ||
  weekday == 4 ||
  weekday == 5
) {
  console.log("Working day");
}

//ternary
age < 21
  ? console.log("you are not allowed to drink alcohol")
  : console.log("you are allowed to drink alcohol");

condition ? true : false;

const myState = age >= 10 && age <= 18 ? "teenage" : "adult";
