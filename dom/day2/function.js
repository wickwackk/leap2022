let count = 0;
let count1 = 0;
let value = 0;
// let rootElement = getElementById("root");
let uruudah = false;

let myInterval = setInterval(function () {
  if (count == 400 && count1 == 400) {
    uruudah = true;
  }
  if (count == 0 && count1 == 0) {
    uruudah = false;
  }
  if (uruudah) {
    count--;
    count1--;
    if (value > 0) {
      value--;
    }
  } else {
    count++;
    count1++;
    if (value < 255) {
      value++;
    }
  }

  document.querySelector(".element").style.width = `${count}px`;
  document.querySelector(".element").style.height = `${count1}px`;
  document.getElementById(
    "root"
  ).style.backgroundColor = `rgb(255, ${value}, 122)`;
}, 1);

document.getElementsByClassName("element")[0].innerText = "Hello World";
document.getElementsByTagName("div")[0].innerText = "Hello Pinecone";

document.querySelector(".element").style.border = "3px solid black";
