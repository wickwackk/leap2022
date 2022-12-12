// id gaar n barij avah
document.getElementById("root").innerText = "Hello World";

//classaar n barij avah
document.getElementsByClassName("dummy")[0].innerHTML = "Hello Pinecone";

//tag name eer n barij avah
document.getElementsByTagName("body");

//query selector
document.querySelector(".query").innerHTML = "queryselector";

//for loop ashiglan li element hiih
let rootElement = document.getElementById("root");
let ulElement = document.createElement("ul");
rootElement.appendChild(ulElement);

for (let i = 0; i < 10; i++) {
  let liElement = document.createElement("li");
  liElement.innerText = i.toString();
  ulElement.appendChild(liElement);
}

// tugeemel ashiglagdah methods
document.createElement(element)
document.removeChild(element)
document.appendChild(element)
document.replaceChild(new,old);

//shatriin hulug
let rootElement = document.getElementById("root");
rootElement.style.display = "flex";
rootElement.style.flexWrap = "wrap";
rootElement.style.width = "850px";

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let newDiv = document.createElement("div");
    rootElement.appendChild(newDiv);
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = "1px solid black";
    if ((i + j) % 2 == 0) {
      newDiv.style.backgroundColor = "grey";
    }
  }
}


//doosho tsuvuuldag interval

let i = 0;

let rootElement = document.getElementById("root");
let myInterval = setInterval(function () {
  i++;
  let newDiv = document.createElement("div");
  newDiv.innerText = i;
  rootElement.appendChild(newDiv);
}, 1000);


//tsag hiih
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
