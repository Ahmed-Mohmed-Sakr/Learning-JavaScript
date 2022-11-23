const square = (num) => num * num;

const squareLong = (num) => {
  return num * num;
};

console.log(square(5));

const people = [
  {
    name: "ahmed",
    age: 21,
  },
  {
    name: "zainb",
    age: 21,
  },
  {
    name: "tamer",
    age: 17,
  },
];

// const under20 = people.filter(function (person) {
//   return person.age < 20;
// });

const under20 = people.filter((person) => person.age < 20);
console.log(under20);

const ageof21 = people.filter((person) => person.age === 21);
ageof21.forEach((person) => console.log(person.name));
