let select = document.querySelector("#breeds");

fetch("https://dog.ceo/api/breeds/list")
  .then((res) => res.json())
  .then((breed) => {
    for (let i = 0; i < breed.message.length; i++) {
      let option = document.createElement("option");
      option.innerHTML = breed.message[i];
      option.setAttribute("value", breed.message[i]);
      select.appendChild(option);
    }
  });

let option = document.querySelector("option");
let card = document.querySelector(".card");

select.addEventListener("change", () => {
  let dogName = select.value;
  card.innerHTML = "";
  let img = document.createElement("img");
  card.appendChild(img);
  let realImg = document.querySelector("img");
  fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)
    .then((res) => res.json())
    .then((res) => {
      realImg.src = res.message;
    });
});

card.addEventListener("click", () => {
  let dogName = select.value;
  card.innerHTML = "";
  let img = document.createElement("img");
  card.appendChild(img);
  let realImg = document.querySelector("img");
  fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)
    .then((res) => res.json())
    .then((res) => {
      realImg.src = res.message;
    });
});
