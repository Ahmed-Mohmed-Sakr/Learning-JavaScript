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
getPuzzle("2")
  .then((puzzle) => {
    console.log(puzzle);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

getLocation()
  .then((location) => {
    return getContryName(location.country);
  })
  .then((contryName) => {
    console.log(contryName);
  })
  .catch((err) => {
    console.log(err);
  });
