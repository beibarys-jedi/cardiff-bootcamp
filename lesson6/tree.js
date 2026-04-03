// const tree = ["Емен", "Қайын", "Қарағаш"];

// for (let i = 0; i < tree.length; i++) {
//   const element = tree[i];
//   console.log(`${i} -  ${element}`);
// }

// const fruits = ["apple", "banana", "orange", "pear", "pineapple"];

// console.log(fruits);

// const removed = fruits.splice(1, 2);

// console.log(removed);

// fruits.splice(2, 0, "grapefruit", "kiwi");

// console.log(fruits);

const fruits = ["apple", "banana", "orange", "pear", "pineapple"];

const f2 = fruits.slice(0, 2);
console.log(f2);

const citrus = fruits.slice(2, 3);
console.log(citrus);

const tropical = fruits.slice(-2);
console.log(tropical);

const fruits1 = ["apple", "banana"];
const vegetb2 = ["potato", "tomato"];

const fAndV = fruits1.concat(vegetb2);

const fAndVSpread = ["strawberry", ...fruits1, ...vegetb2, "blueberry"];
console.log(fAndVSpread);

fAndVSpread.forEach((fruit) => {
  console.log(`new ${fruit}`);
});

let orangeIndex;
for (let i = 0; i < fruits.length; i += 1) {
  if (fruits[i] === "orange") {
    orangeIndex = i;
    break;
  }
}

console.log(orangeIndex);

console.log(fruits);
console.log(fruits.includes("pear"));

// find
// findIndex
// some
// evrey
