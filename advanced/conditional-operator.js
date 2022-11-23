// const myAge = 21;
// const message = myAge >= 18 ? "You can vote" : "You cannot vote";

// // message = myAge >= 18 ? "You can vote" : "You cannot vote";

// // if (myAge >= 18) {
// //   message = "You can vote";
// // } else {
// //   message = "You cannot vote";
// // }

// console.log(message);

///

const myAge = 21;
const showpage = () => {
  return "showing the page";
};
const showErrorPage = () => {
  return "showing the error page";
};

const message = myAge >= 21 ? showpage() : showErrorPage();
console.log(message);

const team = ["ahmed", "zaib"];

console.log(
  team.length <= 4 ? `Team size:${team.length}` : "Too many people on your team"
);
