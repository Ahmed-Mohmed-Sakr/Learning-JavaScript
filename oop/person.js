// prototypal Inheritance

class PersonClass {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`;
    });

    return bio;
  }

  setName(fullname) {
    const names = fullname.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

const myPerson = new PersonClass("ahmed", "sakr", 21, ["chess"]);
console.log(myPerson.getBio());

// const Person = function (firstName, lastName, age, likes = []) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.likes = likes;
// };

// Person.prototype.getBio = function () {
//   let bio = `${this.firstName} is ${this.age}.`;

//   this.likes.forEach((like) => {
//     bio += ` ${this.firstName} likes ${like}.`;
//   });

//   return bio;
// };

// Person.prototype.setName = function (fullname) {
//   const names = fullname.split(" ");
//   this.firstName = names[0];
//   this.lastName = names[1];
// };

// const me = new Person("ahmed", "sakr", 21, ["learning", "chess"]);

// me.setName("nader tamer");
// console.log(me.getBio());

// const person2 = new Person("zainb", "sakr", 21, []);
// console.log(person2.getBio());
