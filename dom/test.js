let rootElement = document.getElementById("root");
rootElement.style.display = "flex";
rootElement.style.flexWrap = "wrap";
rootElement.style.width = "850px";

for (let i = 0; i < 64; i++) {
  let newDiv = document.createElement("div");
  rootElement.appendChild(newDiv);
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.border = "1px solid black";
  if ((i + (Math.floor(i / 8) % 2)) % 2 == 0) {
    newDiv.style.backgroundColor = "grey";
  }
}

let name = "andy";
let welcomeMessage = `${i}px`;
