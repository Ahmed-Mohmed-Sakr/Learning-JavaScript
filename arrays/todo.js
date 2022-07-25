const todo = [
  { text: "walk the dog", completed: true },
  { text: "feed the cat", completed: false },
  { text: "buy groceries", completed: true },
  { text: "go to the gym", completed: false },
  { text: "learn javascript", completed: false },
];

const sortTodo = function (todos) {
  todos.sort(function (a, b) {
    if (a.completed < b.completed) {
      return -1;
    } else if (a.completed > b.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

const deleteTodo = function (todo, message) {
  const index = todo.findIndex(function (iteam) {
    return iteam.text.toLowerCase() === message.toLowerCase();
  });
  if (index >= 0) {
    todo.splice(index, 1);
  }
};

const getThingsTodo = function (todos, completed) {
  const thingsToDo = todos.filter(function (iteam, index) {
    return iteam.completed === completed;
  });
  return thingsToDo;
};

sortTodo(todo);
console.log(todo);

// console.log(getThingsTodo(todo, false));

// deleteTodo(todo, "Feed The Cat");
// console.log(todo);

// todo.splice(2, 1);
// todo.push("learn python");
// todo.shift();

// console.log(`you have ${todo.length} todos`);

// todo.forEach(function (iteam, index) {
//   console.log(`${index + 1}. ${iteam}`);
// });

// for (let count = 0; count < todo.length; count++) {
//   console.log(`${count + 1}. ${todo[count]}`);
// }
