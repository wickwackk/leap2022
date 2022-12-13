let mainDiv = document.getElementById("root");
mainDiv.style.width = "850px";
mainDiv.style.display = "flex";
mainDiv.style.flexWrap = "wrap";
let a = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let c = Math.floor(Math.random() * 255);
let d = Math.floor(Math.random() * 15);

for (let i = 0; i < 16; i++) {
  let newDiv = document.createElement("div");
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.border = "1px solid black";
  newDiv.style.backgroundColor = `rgb(${a}, ${b}, ${c}`;
  newDiv.innerText = `rgb: ${a},${b}, ${c}`;
  newDiv.style.textAlign = "center";
  mainDiv.appendChild(newDiv);
  if (i == d) {
    newDiv.style.backgroundColor = `rgb(${a - 30}, ${b - 30}, ${c - 30}`;
    newDiv.innerText = `rgb: ${a - 30},${b - 30}, ${c - 30}`;
  }
}
