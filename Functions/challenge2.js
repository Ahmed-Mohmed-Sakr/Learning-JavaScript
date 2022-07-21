let getTip = function (total, tipPercent = 0.2) {
  let tip = total * tipPercent;
  return `A ${tipPercent * 100}% tip on $${total} would be $${tip}`;
};

console.log(getTip(100));
console.log(getTip(40, 0.25));
