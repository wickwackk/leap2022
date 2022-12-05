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
