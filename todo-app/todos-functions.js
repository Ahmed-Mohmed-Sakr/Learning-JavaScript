// Fetch existing todos from localStorage
const getSavedTodos = function () {
  const todoJSON = localStorage.getItem("todos");

  if (todoJSON !== null) {
    return JSON.parse(todoJSON);
  } else {
    return [];
  }
};

// Save todos to localStorage
const saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Render application todos based on filters
const rendeTodo = function (todos, filters) {
  const filtertodos = todos.filter(function (note) {
    const searchTextMatch = note.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !note.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  document.querySelector("#todo-list").innerHTML = "";
  document
    .querySelector("#todo-list")
    .appendChild(generateSummaryDOM(filtertodos));

  filtertodos.forEach(function (todo) {
    document.querySelector("#todo-list").appendChild(generateTodoDOM(todo));
  });
};

// remove todo from the list
const removeTodo = function (id) {
  const todIndex = todos.findIndex(function (todo) {
    return todo.id === id;
  });

  if (todIndex > -1) {
    todos.splice(todIndex, 1);
  }
};

// checkbox changes
const checkboxChange = function (id) {
  const todIndex = todos.findIndex(function (todo) {
    return todo.id === id;
  });

  if (todIndex > -1) {
    todos[todIndex].completed = !todos[todIndex].completed;
  }
};

// get the DOM elements for individual todo
const generateTodoDOM = function (todo) {
  const todoEl = document.createElement("div");
  const todoText = document.createElement("span");
  const checkBox = document.createElement("input");
  const removeButton = document.createElement("button");

  // setup the checkbox
  checkBox.setAttribute("type", "checkbox");
  todoEl.appendChild(checkBox);
  checkBox.checked = todo.completed;
  checkBox.addEventListener("change", function () {
    checkboxChange(todo.id);
    saveTodos(todos);
    rendeTodo(todos, filters);
  });

  // setup the todo text
  todoText.textContent = todo.text;
  todoEl.appendChild(todoText);

  // setup the remove button
  removeButton.textContent = "x";
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", function () {
    removeTodo(todo.id);
    saveTodos(todos);
    rendeTodo(todos, filters);
  });

  return todoEl;
};

//get the DOM elements for list summary
const generateSummaryDOM = function (filtertodos) {
  const incompleteTodos = filtertodos.filter(function (todo) {
    return !todo.completed;
  });

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
