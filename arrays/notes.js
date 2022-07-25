const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habits to work on",
    body: "Exercise. Eating a bit better.",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

// console.log("a" < "A");

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const findNote = function (notess, noteTitle) {
  return notess.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const findNotes = function (notess, query) {
  const filterNotes = notess.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });

  return filterNotes;
};

sortNotes(notes);
console.log(notes);

// console.log(findNotes(notes, "work"));

// const note = findNote(notes, "office modification");
// console.log(note);

// const findNote = function (notess, noteTitle) {
//   const index = notess.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

// console.log(notes.pop());
// notes.push("my new note");

// console.log(notes.shift());
// notes.unshift("my first note");

//notes.splice(1, 1, "this is new second iteam");

// notes[2] = "this is new note now";

// notes.forEach(function (iteam, index) {
//   console.log(index);
//   console.log(iteam);
// });

// console.log(notes.length);
// console.log(notes);

// const index = notes.findIndex(function (iteam, index) {
//   console.log(iteam);
//   return iteam.title === "Habits to work on";
// });

// console.log(index);

// console.log(notes.indexOf({}));

// console.log({} === {});
// let soomeObject = {};
// let otherObject = soomeObject;
// console.log(soomeObject === otherObject);
// counting ....1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ....

// for (let count = 2; count >= 0; count--) {
//   console.log(count);
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//   console.log(notes[count]);
// }
