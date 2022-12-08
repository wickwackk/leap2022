// #object

let person = {
  firstname: "Jamie",
  lastname: "Dorj",
  age: 22,
  score: [77, 90, 85, 100],
  isMarried: false,
};

//arrow function, expression
let func = () => {
  console.log("person");
};

//zgr function
function getPerson() {
  console.log("person");
}

// #object

let person1 = {
  firstname: "Jamie", //firstname --> key, property "Jamie" --> value
  lastname: "Dorj",
  age: 22,
  score: [77, 90, 85, 100],
  isMarried: false,
  shout: () => {
    //--> function n method bolno.
    console.log("WAAAA");
  },
};

// nested object

let person1 = {
  firstname: "Jamie", //firstname --> key, property "Jamie" --> value
  lastname: "Dorj",
  age: 22,
  score: [77, 90, 85, 100],
  isMarried: false,
  shout: () => {
    //--> function n method bolno.
    console.log("WAAAA");
  },
  address: {
    country: "Mongolia",
    city: "Ulaanbaatar",
  },
};

//objectoos utgaa avah

objectName.property;

// objectiin function

let person3 = {
  firstname: "huurhn",
  lastname: "fucker",
  huurhunNer: function () {
    return this.firstname + " " + this.lastname;
  },
};

// objectin ugugdliin utga hevleh

let personn = {
  firstname: "Jamie",
};
let person2 = personn;

person2.firstname = "Batsaan";

console.log(personn.firstname);
console.log(person2.firstname);

// spread operator

let person1 = [10, 20, 30];
let person2 = [...person1];

person2[0] = 100;

console.log(person1);

//object method

let person1 = {
  firstname: "Jamie", //firstname --> key, property "Jamie" --> value
  lastname: "Dorj",
  age: 22,
  score: [77, 90, 85, 100],
  isMarried: false,
  shout: () => {
    //--> function n method bolno.
    console.log("WAAAA");
  },
};

// console.log(person1.keys());
// console.log(person1.values());
// console.log(person1.create());
// console.log(person1.assign());
// console.log(person1.toString());
