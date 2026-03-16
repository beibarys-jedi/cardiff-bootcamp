// let i = 0;

// do {
//   console.log("number", i);
//   i++;
// } while (i < 3);

// while (i < 5);
// {
//   console.log(i);
//   i++;
// }

// let j = 3;

// while (j) {
//   console.log(j);
//   i--;
// }

// even
// for (let index = 0; index < 10; index = index + 2) {
//   console.log(index);
// }

// odd
// for (let index = 1; index < 10; index = index + 2) {
//   console.log(index);
// }
// i
// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

// for (let index = 2; index < 10; index++) {
//   if (index != 1) {
//     if (index % 2 == 0) continue;
//     console.log(index);
//   }
// }

const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}

for (const char of "kazakhstan") {
  console.log(char);
}

const hero = {
  nickName: "Bruce",
  heroName: "Batman",
  age: 36,
  actorName: "Christian Bale",
};

for (const key in hero) {
  console.log(`${key} of hero is ${hero[key]}`);
}

const movie = {
  title: "Казнить нельзя помиловать",
  year: 2025,
};

for (const key in movie) {
  console.log(`${key} of movie is ${movie[key]}`);
}
