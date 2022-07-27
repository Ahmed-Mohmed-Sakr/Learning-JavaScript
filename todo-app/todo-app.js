const todos = [
  { text: "walk the dog", completed: true },
  { text: "feed the cat", completed: false },
  { text: "buy groceries", completed: true },
  { text: "go to the gym", completed: false },
  { text: "learn javascript", completed: false },
];

const filters = {
  searchText: "",
  hideCompleted: false,
};

const rendeTodo = function (todos, filters) {
  const filtertodos = todos.filter(function (note) {
    return (
      note.text.toLowerCase().includes(filters.searchText.toLowerCase()) &&
      (!filters.hideCompleted || !note.completed)
    );
  });

  document.querySelector("#todo-list").innerHTML = "";

  const incompleteTodos = filtertodos.filter(function (todo) {
    return !todo.completed;
  });

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todo-list").appendChild(summary);

  filtertodos.forEach(function (todo) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = todo.text;
    document.querySelector("#todo-list").appendChild(newParagraph);
  });
};

rendeTodo(todos, filters);

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  rendeTodo(todos, filters);
});

document
  .querySelector("#addNote-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const newTodo = e.target.elements.newTodo.value;
    e.target.elements.newTodo.value = "";
    todos.push({
      text: newTodo,
      completed: false,
    });

    rendeTodo(todos, filters);
  });

document
  .querySelector("#hide-com-todos")
  .addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked;
    rendeTodo(todos, filters);
  });

// document.querySelector("#add-todo").addEventListener("click", function (e) {
//   console.log("adding note ..");
// });
// document.querySelector("#todo-text").addEventListener("input", function (e) {
//   console.log(e.target.value);
// });

// const paragraphs = document.querySelectorAll("p");

// paragraphs.forEach(function (paragraph) {
//   const text = paragraph.textContent.toLowerCase();
//   if (text.includes("the")) {
//     paragraph.remove();
//   }
// });
