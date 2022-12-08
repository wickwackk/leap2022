let athletes = [
  {
    name: "Gonchig",
    age: 15,
    record: [15, 20, 30, 50, 25, 11, 12, 13, 14, 15, 16, 17], // 19.83, 238
  },
  {
    name: "Boldoo",
    age: 20,
    record: [35, 25, 15, 13, 26, 27, 28], // 24.14 169
  },
  {
    name: "Jamie",
    age: 22,
    record: [20, 10, 40, 34, 35, 36, 37, 38, 39, 40, 41, 42], // 34.33 412
  },
  {
    name: "Yunchir",
    age: 25,
    record: [30, 35, 40, 50, 51, 52, 53, 54, 55, 67, 69], // 50.54 556
  },
];

function averageAge(people) {
  let sum = 0;
  for (let i = 0; i < people.length; i++) {
    sum += people[i].age;
  }
  return Math.floor(sum / people.length);
}

function averageTime(people) {
  let sum = 0;
  let personalAvg = 0;
  let arr = [];
  for (let i = 0; i < people.length; i++) {
    let personalSum = 0;
    for (let j = 0; j < people[i].record.length; j++) {
      personalSum += people[i].record[j];
    }
    personalAvg = personalSum / people[i].record.length;
    arr.push({
      name: people[i].name,
      averagetime: personalAvg.toFixed(2) + " sec",
    });
    sum += personalAvg;
  }
  console.table(arr);
  console.log("-------------------------------------");
  return (sum / people.length).toFixed(2);
}

console.log("Average record: " + averageTime(athletes) + " sec");
console.log("Average age: " + averageAge(athletes) + " years old");
