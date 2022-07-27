const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habits to work on",
    body: "Exercise. Eating a bit better.",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

const filters = {
  searchText: "",
};

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (e) {
    const noteEl = document.createElement("p");
    noteEl.textContent = e.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  e.target.textContent = "Button was clicked";
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});

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
