// array print using loop;

let studentAges = [10, 20, 30, 40];

for (let i = 0; i < studentAges.length; i++) {
  studentAges[i] += 1;
}
console.log(studentAges);

//students name example ehnii usgeer oloh;
let studentNames = ["boldo", "dorjo", "tsetsgee", "dulmaa"];
let i = 0;

while (i <= studentNames.length) {
  if (studentNames[i] && studentNames[i][0] === "d") {
    console.log(studentNames[i]);
  }
  i++;
}

//urt ner oloh
let studentNames = [
  "boldooo",
  "ayguuuuuuuuuuu",
  "dorjo",
  "tsetsgeeeeeeeeeeeee",
  "dulmaaaaaaaaaaaaaaaaaa",
];
let i = 1;
let urt;
let j = 0;
let lname = studentNames[0];

while (i < studentNames.length) {
  if (lname.length < studentNames[i].length) {
    lname = studentNames[i];
  }
  i++;
}
console.log(lname);

//2d array
for (let i = 0; i < x.length; i++) {
  for (let j = 0; j < x[0].length; j++) {
    console.log(x[i][j]);
  }
}
