// function syntax

function myFunction(parameter1, parameter2, parameter3) {
  //funts dotorh code uud
}
//function n keyword uchir ashiglahgu
//

//"Hello there!" text hevledeg funtsiin todorhoilolt
function greet() {
  console.log("Hello there!");
}
//funtsiig duudah
greet();

// example1

let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));
let number3 = parseFloat(prompt("Enter second number: "));

function find(n1, n2, n3) {
  let convert1 = Number(n1);
  let convert2 = Number(n2);
  let convert3 = Number(n3);
  if (Number)
    if (n1 >= n2 && n1 >= n3) {
      return n1;
    } else if (n2 >= n3) {
      return n2;
    } else {
      return n3;
    }
}

let result = find(number1, number2, number3);

console.log("Greatest is " + result);

// huvisagchiig function bolgoh

let a = function (name) {
  return "Hello " + name;
};

console.log(a("Mike"));

// uur bichiglel (Hackerduulahguin tuld const ashigladg)

const b = (names) => {
  return "Hello " + names;
};

//functionoor converter hiih
