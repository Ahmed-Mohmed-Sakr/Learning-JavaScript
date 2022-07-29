let notes = getSavedNotes();

const filters = {
  searchText: "",
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  notes.push({
    id: uuidv4(),
    title: "",
    body: "",
    createdAt: moment().valueOf(),
    updatedAt: moment().valueOf(),
  });
  location.assign(`/edit.html#${notes[notes.length - 1].id}`);
  saveNotes(notes);
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});

window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

// const birthday = moment("2001-02-15");
// console.log(birthday.format("MMM D, YYYY"));

// const now = moment();
// // console.log(now.toString());
// now.subtract(1, "year").subtract(20, "days");
// console.log(now.format("MMMM Do, YYYY"));

// console.log(now.fromNow());

// console.log(now.valueOf());

// November 3rd, 2003

//  unix Epoch - January 1st 1970 00:00:00

// const now1 = new Date("2020-01-01");
// const now2 = new Date("2023-01-01");

// const timeTemp1 = now1.getTime();
// const timeTemp2 = now2.getTime();

// if (timeTemp1 < timeTemp2) {
//   console.log(now1.toString());
// } else {
//   console.log(now2.toString());
// }

// const myDate = new Date(timeTemp);
// console.log(myDate.getFullYear());

//console.log(now.getTime());
// console.log(now.toString());
// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day: ${now.getDate()}`);
// console.log(`Hours: ${now.getHours()}`);
// console.log(`Minutes: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

// const notes = [
//   {
//     title: "My next trip",
//     body: "I would like to go to Spain",
//   },
//   {
//     title: "Habits to work on",
//     body: "Exercise. Eating a bit better.",
//   },
//   {
//     title: "Office modification",
//     body: "Get a new seat",
//   },
// ];

// const user = {
//   name: "ahmed",
//   age: 21,
// };

// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem("user", userJSON);

// const userJSON = localStorage.getItem("user");

// const user = JSON.parse(userJSON);
// console.log(`Hello ${user.name}, you are ${user.age} years old`);

//localStorage.setItem("location", "egypt");
//console.log(localStorage.getItem("location"));
// localStorage.removeItem("location");
// localStorage.clear();

// document.querySelector("#for-fun").addEventListener("change", function (e) {
//   console.log(e.target.checked);
// });

// document.querySelector("#name-form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(e.target.elements.firstName.value);
//   e.target.elements.firstName.value = "";
// });

// // DOM is document object model

// // query and remove
// // const p = document.querySelector("p");
// // p.remove();

// // query all and remove
// const ps = document.querySelectorAll("p");
// ps.forEach(function (p) {
//   p.textContent = "*********";
//   //console.log(p.textContent);
//   //p.remove();
// });

// // Add new elemant
// const newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new elemaent from javascript";
// document.querySelector("body").appendChild(newParagraph);
