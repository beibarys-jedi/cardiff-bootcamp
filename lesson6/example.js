// empty object
const empty = {};
const empty2 = new Object();

// object
const person = {
  firstName: "Talgat",
  age: 35,
  isManagement: true,
  laptop: {
    title: "MacBook",
    size: "13 Inch",
  },
};

for (const key in person) {
  console.log(key);
}

for (const key in person) {
  console.log(person[key]);
}

// console.log(person.firstName);
// console.log(person.surname); // undefined
// console.log(person.surname.age); //TypeError: Cannot read properties of undefined (reading 'age')

// console.log(person);

// person.age = 18;
// console.log(person);
// delete person.isManagement;
// console.log(person);

const cat = {
  nickName: "Garfield",
  "is happy": true,
  "is-grumpy": true,
};

// cat["is happy"] = undefined;
// console.log(cat["is happy"]);
// delete cat["is happy"];
// console.log(cat["is happy"]);

// cat["is happy"] = true;
// console.log(cat["is happy"]);
// // delete cat["is happy"];
// console.log(cat["is happy"]);
