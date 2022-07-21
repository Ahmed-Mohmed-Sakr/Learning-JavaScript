let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// defult arguments
let getScoreText = function (name = "Anonymous", score = 0) {
  return `Name: ${name} - Score: ${score}`;

  //return "name: " + name + ", Score: " + score;
};

let scoreText = getScoreText(undefined, 99);

console.log(scoreText);

// let name = "zainb";
// let age = "21";
// console.log(`hey, my name is ${name}! i am ${age} years old.`);
