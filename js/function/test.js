const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";

let input = "Hello !World";

function converter(string) {
  let str = "";
  let char = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < upper.length; j++) {
      if (string[i] != upper[j]) {
        if (string[i] == lower[j]) {
          str += string[i].toUpperCase();
        } else if (string[i] != lower[j]) {
        }
      } else {
        str += string[i].toLowerCase();
      }
    }
    if (string[i] != lower[i] && string[i] != upper[i]) {
      str += string[i];
    }
  }
  return str;
}
let result = converter(input);
console.log(result);
