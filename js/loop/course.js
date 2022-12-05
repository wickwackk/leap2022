// while loop
let count = 1;

while (count <= 10) {
  console.log(count);
  count = count + 1;
}

// ascii convert
let word = "abc123";

console.log(word.charCodeAt(0));

// do-while
do {
  //uildluud
} while (condition);

// 10 - 1 ruu
let count = 10;

while (count >= 1) {
  console.log(count);
  count = count - 1;
}

// a useg tooloh
let count = 0;
let text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let n = 0;
while (n < text.length) {
  if (text[n] == "a" || text[n] == "A") {
    count = count + 1;
  }
  n = n + 1;
}
console.log(count);

// 100 dotor 3t huvaagddg too tooloh
let num = 100;
let count = 0;

while (num > 0) {
  if (num % 3 == 0) {
    count = count + 1;
  }
  num = num - 1;
}
console.log(count);

//Increment decrement

n++, n--;

//asdfs
let x = 10;
let count = 1;
let output = "";

while (x > 0) {
  let y = 10;
  while (y > 0) {
    output = output + count + "\t";
    if (count % 10 == 0) output += "\n"; // output = output +"\n"
    y--;
    count++;
  }
  x--;
}
console.log(output);

//For loop
for (let i = 1; i <= 10; i++) {
  //things to do while condition is true
}

//exercise
let str = "";

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    str += j + " ";
    debugger;
  }
  str += "\n";
}
console.log(str);

//Star hollow
let num = 7;
let str = "";

for (let i = 1; i <= num; i++) {
  if (i > 1 && i < num) {
    for (let j = 1; j <= num; j++) {
      if (j > 1 && j < num) {
        str += " ";
      } else {
        str += "*";
      }
    }
  } else {
    for (let j = 1; j <= num; j++) {
      str += "*";
    }
  }
  str += "\n";
}
console.log(str);

// toon hollow
let num = 7;
let str = "";

for (let i = 1; i <= num; i++) {
  if (i > 1 && i < num) {
    for (let j = 1; j <= num; j++) {
      if (j > 1 && j < num) {
        str += "  ";
      } else {
        str += j + " ";
      }
    }
  } else {
    for (let j = 1; j <= num; j++) {
      str += j + " ";
    }
  }
  str += "\n";
}
console.log(str);

//rowiin toon hollow
let num = 7;
let str = "";

for (let i = 1; i <= num; i++) {
  if (i > 1 && i < num) {
    for (let j = 1; j <= num; j++) {
      if (j > 1 && j < num) {
        str += "  ";
      } else {
        str += i + " ";
      }
    }
  } else {
    for (let j = 1; j <= num; j++) {
      str += i + " ";
    }
  }
  str += "\n";
}
console.log(str);

//gurvaljin
let str = "";
let input = 7;
for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    str += j + " ";
  }
  str += "\n";
}
console.log(str);

//3n ornoor tusgaarlay
let number = "123456789";
console.log(number.charAt(number.length - 3));
console.log(number.substring(1, 3));

number =
  number.substring(0, number.length - 3) +
  "_" +
  number.substring(number.length - 3, number.length);

console.log(number);

// pass
let password = "123";
let input; // undefined

while (password != input) {
  input = prompt("Enter your password: ");
}

//utsnii dugaar
let number;

while (true) {
  number = prompt("Enter your password again: ");
  let firstChar = number.charAt(0);
  number = Number(number);
  if (Number.isInteger(number) && (firstChar == "9" || firstChar == "8")) {
    break;
  }
}

//prime number
let n = 2;
let prime = true;

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    prime = false;
    break;
  }
}

if (prime == true) {
  console.log("Yes");
} else {
  console.log("No");
}

//pyramid with too

let output = "";
let count = 1;

for (let row = 1; row <= 4; row++) {
  for (let dash = 4 - row; dash > 0; dash--) {
    output += " ";
  }
  for (let num = 1; num <= row; num++) {
    output += count + " ";
    count++;
  }
  output += "\n";
}
console.log(output);
