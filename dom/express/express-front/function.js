// fetch("http://localhost:3333/api/cars")
//   .then((res) => res.json())
//   .then((res) => console.log(res));

let button = document.getElementById("button");
let body = document.querySelector("body");
let newBigDiv = document.getElementById("root");
newBigDiv.style.display = "flex";
newBigDiv.style.flexWrap = "wrap";
newBigDiv.style.gap = "20px";
newBigDiv.style.margin = "20px";
let tr = true;
button.addEventListener("click", () => {
  newBigDiv.innerHTML = "";
  if (tr) {
    fetch("http://localhost:3333/api/cars")
      .then((res) => res.json())
      .then((res) =>
        res.map((car) => {
          let newDiv = document.createElement("div");
          newDiv.style.height = "460px";
          newDiv.style.width = "450px";
          newDiv.innerHTML = `<div class="card" style ="height: 460px">
        <img style="height: 400px" src="${car.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${car.model}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-secondary">Go somewhere</a>
        </div>
      </div>`;
          newBigDiv.appendChild(newDiv);
        })
      );
    tr = false;
  } else {
    tr = true;
  }
});

let modelSelect = document.getElementById("modelSelect");
let brandSelect = document.getElementById("brandSelect");

fetch("http://localhost:3333/api/cars")
  .then((res) => res.json())
  .then((res) => {
    let arr = [];
    res.map((car) => {
      if (arr.includes(car.brand)) {
        arr = arr;
      } else {
        arr.push(car.brand);
      }
    });
    arr.map((uniqueCar) => {
      let option = document.createElement("option");
      option.innerHTML = uniqueCar;
      option.value = uniqueCar;
      brandSelect.appendChild(option);
    });
  });
modelSelect.style.display = "none";
let brandSelected = document.getElementById("brandSelected");
let modelSelected = document.getElementById("modelSelected");

brandSelect.addEventListener("change", () => {
  brandSelected.style.display = "none";
  modelSelect.style.display = "block";
  modelSelect.innerHTML = "";
  modelSelect.appendChild(modelSelected);
  fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
      res.map((car) => {
        if (brandSelect.value == car.brand) {
          let option = document.createElement("option");
          option.innerHTML = car.model;
          option.value = car.model;
          modelSelect.appendChild(option);
        }
      });
    });
});

let searchBtn = document.getElementById("searchBtn");
let modal = document.getElementById("exampleModal");
searchBtn.addEventListener("click", () => {
  newBigDiv.innerHTML = "";
  fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
      res.map((car) => {
        if (car.brand == brandSelect.value && car.model == modelSelect.value) {
          let newDiv = document.createElement("div");
          newDiv.style.height = "460px";
          newDiv.style.width = "450px";
          newDiv.innerHTML = `<div class="card" style ="height: 460px">
        <img style="height: 400px" src="${car.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${car.model}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-secondary">Go somewhere</a>
        </div>
      </div>`;
          newBigDiv.appendChild(newDiv);
        }
      });
    });
});
