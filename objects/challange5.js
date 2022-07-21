let makeGuess = function (guess) {
  let min = 1;
  let max = 5;
  let random = Math.floor(Math.random() * (max - min + 1)) + min;

  return guess === random;
};

console.log(makeGuess(1));
