// primitive value: (non object) is string, number, boolean, null, undefind.

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myfunc --> Function.prototype --> Object.prototype --> null
// String: mystring -->String.prototype --> Object.prototype --> null
// Number: myNumber -->Number.prototype --> Object.prototype --> null
// boolean: myboolean -->boolean.prototype --> Object.prototype --> null

const puzzelEl = document.querySelector("#puzzel");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("car park", 2);

puzzelEl.textContent = game1.puzzel;
guessesEl.textContent = game1.statusMessage;

//console.log(game1.status);

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzelEl.textContent = game1.puzzel;
  guessesEl.textContent = game1.statusMessage;

  //  console.log(game1.status);
});
