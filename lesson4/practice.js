// data types
// 1 - number
let n = 1.23;
let m = 100500;
let pi = 3.1415;
console.log(typeof n);
console.log(typeof m);
console.log(1 / 0); // Infinity
console.log(typeof (1 / 0));

// 2 - bigInt
// console.log(2 ** 54);
let bignumber = 18014398509481984n; // add n after
console.log(typeof bignumber);
console.log(typeof (2 ** 53));

// 3 - string
// let str1 = 'Hello';
let str1 = 20 + 20;
let str2 = 'Single askkadsk askaskdds';
let phrase = `Backward commas ${str1}`;
console.log(phrase);

// there is no char in Javacsript like in C, Java

// 4 - boolean: true, false
let nameFileChecked = true;
let isAdmin = false;
console.log(typeof nameFileChecked, typeof isAdmin);

// 5 - null, 6 - undefined

let age = null;
let year;
console.log(typeof age);
console.log(typeof year);
// 7 - object
// key-value pair
let user1 = new Object();
let user2 = {};
let user3 = {
  name: 'Cardiff',
  city: 'Astana',
  year: 2025,
  isAdmin: true,
};
console.log(typeof user1);
console.log(typeof user2);

// typeof(user1)

console.log(user3.city, user3.year);

delete user3.city;
console.log(user3.city, user3.year);
console.log(user3);
console.log(user3.isAdmin);

// operator typeof
// return  type of variable
