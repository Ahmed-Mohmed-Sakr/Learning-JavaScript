import Hangman from "./hangman";
import getPuzzle from "./requstes";
const puzzelEl = document.querySelector("#puzzel");
const guessesEl = document.querySelector("#guesses");
let game1;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzelEl.innerHTML = "";
  guessesEl.textContent = game1.statusMessage;

  game1.puzzel.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzelEl.appendChild(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);
startGame();
