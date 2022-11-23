// const add = function () {
//   return arguments[0] + arguments[1];
// };

// fail (arguments don't work in arrow function)
const add = () => {
  return arguments[0] + arguments[1];
};

console.log(add(11, 22, 33, 44));

const car = {
  color: "red",

  getSummary() {
    return `this car is ${this.color}`;
  },

  // getSummary: function () {
  //   return `this car is ${this.color}`;
  // },

  // will not work
  // getSummary: () => {
  //   return `this car is ${this.color}`;
  // },
};

console.log(car.getSummary());
