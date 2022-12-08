const puzzelEl = document.querySelector("#puzzel");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("car park", 2);

puzzelEl.textContent = game1.puzzel;
guessesEl.textContent = game1.statusMessage;

//console.log(game1.status) ;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzelEl.textContent = game1.puzzel;
  guessesEl.textContent = game1.statusMessage;

  //  console.log(game1.status);
});

// asyc
getPuzzle("2").then(
  (puzzel) => {
    console.log(puzzel);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);

console.log("do some thing");

//////
getContryName("EG").then(
  (contryName) => {
    console.log(contryName);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);
