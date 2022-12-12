let i = 0;
let h = 0;
let m = 0;

let rootElement = document.getElementById("root");

let second = setInterval(function () {
  i++;
  rootElement.innerText = `${h < 10 ? "0" : ""}${h}:${m < 10 ? "0" : ""}${m}:${
    i < 10 ? "0" : ""
  }${i}`;
  if (i == 60) {
    m++;
    i = 0;
  }
  if (m == 60) {
    h++;
    m = 0;
  }
  if (h == 24) {
    h = 0;
  }
}, 1000);
