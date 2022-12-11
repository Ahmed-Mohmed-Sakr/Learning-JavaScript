class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.gussedLetters = [];
    this.status = "playing";
  }

  calcStatus() {
    const finished = this.word.every((letter) => {
      return this.gussedLetters.includes(letter) || letter === " ";
    });

    if (this.remainingGuesses === 0) this.status = "faild";
    else if (finished) this.status = "finished";
    else this.status = "playing";
  }

  makeGuess(guess) {
    if (this.status != "playing") return;

    guess = guess.toLowerCase();
    const isUnique = !this.gussedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUnique) {
      this.gussedLetters.push(guess);
    }

    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }

    this.calcStatus();
  }

  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === "finished") {
      return "Great Work! You guessed the word";
    } else {
      return `Nice try! The word was "${this.word.join("")}"`;
    }
  }

  get puzzel() {
    let puzzel = "";

    this.word.forEach((letter) => {
      if (this.gussedLetters.includes(letter) || letter === " ") {
        puzzel += letter;
      } else {
        puzzel += "*";
      }
    });
    return puzzel;
  }
}
