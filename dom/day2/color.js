let value = 0;
let myColor = setInterval(function () {
  if (value == 255) {
    uruudah = true;
  }
  if (value == 0) {
    uruudah = false;
  }
  if (uruudah) {
    value--;
  } else {
    value++;
  }
  document.getElementById(
    "root"
  ).style.backgroundColor = `rgb(255, ${value}, 122)`;
}, 1);
