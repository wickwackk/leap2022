let foods = [
  {
    name: "baked beans",
    price: 0.4,
    image: "beans.jpg",
    type: "vegetables",
  },
  {
    name: "hot dogs",
    price: 1.99,
    image: "hotdogs.jpg",
    type: "meat",
  },
  {
    name: "spam",
    price: 2.85,
    image: "spam.jpg",
    type: "meat",
  },
  {
    name: "refried beans",
    price: 0.99,
    image: "refried.jpg",
    type: "vegetables",
  },
  {
    name: "kidney beans",
    price: 0.58,
    image: "kidney.jpg",
    type: "vegetables",
  },
  {
    name: "garden peas",
    price: 0.52,
    image: "gardenpeas.jpg",
    type: "vegetables",
  },
  {
    name: "mushy peas",
    price: 0.58,
    image: "mushypeas.jpg",
    type: "vegetables",
  },
  {
    name: "corned beef",
    price: 2.39,
    image: "cornedbeef.jpg",
    type: "meat",
  },
  {
    name: "tomato soup",
    price: 1.4,
    image: "tomatosoup.jpg",
    type: "soup",
  },
  {
    name: "chopped tomatoes",
    price: 0.45,
    image: "tomato.jpg",
    type: "vegetables",
  },
  {
    name: "chicken noodle soup",
    price: 1.89,
    image: "chickennoodle.jpg",
    type: "soup",
  },
  {
    name: "carrot and coriander soup",
    price: 1.49,
    image: "carrotcoriander.jpg",
    type: "soup",
  },
];

// console.log(foods[0]["name"]);

let orchuulga = foods.map((food) => {
  let new_key1 = "une";
  let old_key1 = "price";
  let old_key = "name";
  let new_key = "ner";

  if (old_key !== new_key) {
    Object.defineProperty(
      food,
      new_key,
      Object.getOwnPropertyDescriptor(food, old_key)
    );
    delete food[old_key];
  }
  if (old_key1 !== new_key1) {
    Object.defineProperty(
      food,
      new_key1,
      Object.getOwnPropertyDescriptor(food, old_key1)
    );
    delete food[old_key1];
  }
  delete food["image"];
  delete food["type"];
  return food;
});

console.log(orchuulga);

// let old_key = "name";
// let new_key = "ner";

// if (old_key !== new_key) {
//   Object.defineProperty(
//     foods[0],
//     new_key,
//     Object.getOwnPropertyDescriptor(foods[0], old_key)
//   );
//   delete foods[0][old_key];
// }

// console.log(foods);

// let newKey = "ner";
// let oldKey = "name";
// const newObject = {};
// delete Object.assign(newObject, foods[0], { [newKey]: foods[0][oldKey] })[
//   oldKey
// ];

// console.log(newObject);
