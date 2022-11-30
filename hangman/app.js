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
getPuzzle("4", (error, puzzel) => {
  if (error) {
    console.log(error);
  } else {
    console.log(puzzel);
  }
});
console.log("do some thing");

//////
const contryCode = "EG";
getContryName(contryCode, (error, countryName) => {
  if (error) {
    console.log(error);
  } else {
    console.log(countryName);
  }
});
