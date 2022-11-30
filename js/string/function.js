let myString = "single quote' double quote\"";
console.log(myString);

//urt oloh - property
.length

//method - shar ungutei buh ym function esvl method
.charAt() == []
let babySharkLyrics = "3123yh4ioqw4y3tow45hituw";
console.log(babySharkLyrics.charAt(babySharkLyrics.length - 1) );


//tom jijig useg hurvuuleh
const str = 'Life and Universe'
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//concat
let firstName = 'John';
let fullName = firstName.concat(' ','Smith');
console.log(fullName);
console.log(firstName);

//adilhan 
let firstName = 'Jane';
let fullName = firstName + ' ' + 'Smith';
console.log(fullName);

//ded temdegt mur
let str = "JavaScript String";

console.log(str.substring(0, 10));
console.log(str.substring(1, 5));

//bairshil oloh - 2oos ehelj bga 
let str = "This is a string";
console.log(str.indexOf("is")); //2

// exercise 
let str = "This is a string";

console.log(str - str.substring(str.indexOf("is"), str.indexOf("a")));

//exercise 2
let str = "This is a string";
strnew =
  str.substring(0, str.indexOf("is")) +
  str.substring(str.indexOf("is") + "is".length, str.length);
str = strnew.concat();
strnew =
  str.substring(0, str.indexOf("is")) +
  str.substring(str.indexOf("is") + "is".length + 1, str.length);
console.log(strnew);
str = strnew.concat();

//