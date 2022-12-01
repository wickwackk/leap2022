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
