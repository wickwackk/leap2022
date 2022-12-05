let studentNames = ["boldo", "dorjo", "tsetsgee", "dulmaa"];
let i = 0;

while (i <= studentNames.length) {
  if (studentNames[i] && studentNames[i][0] === "d") {
    console.log(studentNames[i]);
  }
  i++;
}
