// if

const user = {
  name: "administrator",
  isAdmin: false, // play if true or false
  isGuest: false,
};

if (user.isAdmin) {
  console.log("Hello, Admin");
} else if (user.isGuest == false) {
  console.log("You are not Guest. Probaly you forgot your creds");
} else {
  console.log("You are guest");
}

let year = 65;

if (year > 65) {
  console.log("you are olderman");
} else if (year < 65 || year > 18) {
  console.log("you are adult");
} else {
  console.log("you are child");
}

// let accessAllowed;
// let age = prompt("Enter your age", "");
// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }
// alert(accessAllowed);

let age = 65;

let accessAllowed = age > 18 ? true : false;
console.log(accessAllowed, " - result of log our acess allowance");
