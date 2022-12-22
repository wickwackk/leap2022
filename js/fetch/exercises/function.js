const form = document.querySelector("form");
const countriesContainer = document.querySelector(".countries");
// https://restcountries.com/v3.1/name/${country}
// https://restcountries.com/v3.1/alpha/${neighbour}

function getCountry(country) {
  let link = fetch(`https://restcountries.com/v3.1/name/${country}`);
  let get = link.then((res) => res.json());
  let data = get.then((res) => {
    renderCountry(res[0]);
  });
}

function renderCountry(country) {
  console.log(country);
  let html = `<article class="country">
  <img class="country__img" src= "${country.flags.svg}"/>
  <div class="country__data">
    <h3 class="country__name">${country.name.common}</h3>
    <h4 class="country__region">${country.continents}</h4>
    <p class="country__row"><span>👫</span>${
      Math.floor(country.population / 1000000) < 1000
        ? (country.population / 1000000).toFixed(2) + "M"
        : (country.population / 1000000000).toFixed(2) + "B"
    } people</p>
    <p class="country__row"><span>🗣️</span>${
      Object.values(country.languages)[0]
    }</p>
    <p class="country__row"><span>💰</span>${
      Object.values(country.currencies)[0].name
    } ${Object.values(country.currencies)[0].symbol}</p>
  </div>
  </article>`;
  document.getElementsByClassName("countries")[0].innerHTML = html;
}
form.addEventListener("submit", (val) => {
  val.preventDefault();
  getCountry(val.target.country_name.value);
});
