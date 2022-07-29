let todos = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false,
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
      id: uuidv4(),
      text: newTodo,
      completed: false,
    });
    saveTodos(todos);
    rendeTodo(todos, filters);
  });

document
  .querySelector("#hide-com-todos")
  .addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked;
    rendeTodo(todos, filters);
  });

// const todos = [
//   { text: "walk the dog", completed: true },
//   { text: "feed the cat", completed: false },
//   { text: "buy groceries", completed: true },
//   { text: "go to the gym", completed: false },
//   { text: "learn javascript", completed: false },
// ];

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
