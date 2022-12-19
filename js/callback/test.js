let mine = document.getElementsByTagName("body")[0];

let maxY = document.body.scrollHeight - window.innerHeight;

function height() {
  let x = Math.round(window.scrollY / (maxY / 100));
  document.getElementById("button").innerText = `${x}%`;
}

window.addEventListener("scroll", height);

// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);
//   console.log(
//     document.documentElement.scrollHeight -
//       document.documentElement.clientHeight
//   );
//   console.log(document.body.scrollHeight);
//   console.log(window.innerHeight);
// });

// console.log(document.getElementsByTagName("body")[0]);
