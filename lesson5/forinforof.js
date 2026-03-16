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
