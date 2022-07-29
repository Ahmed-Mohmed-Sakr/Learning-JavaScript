// read existing notes from local storage
const getSavedNotes = function () {
  const noteJSON = localStorage.getItem("notes");

  if (noteJSON !== null) {
    return JSON.parse(noteJSON);
  } else {
    return [];
  }
};

// save notes to local storage
const saveNotes = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// remove a note from the list
const removeNote = function (id) {
  const nodeIndex = notes.findIndex(function (note) {
    return note.id === id;
  });

  if (nodeIndex > -1) {
    notes.splice(nodeIndex, 1);
  }
};

// generate the DOM structure for a note
const generateNoteDOM = function (note) {
  const noteEl = document.createElement("div");
  const textElLink = document.createElement("a");
  const button = document.createElement("button");

  // setup the remove note button
  button.textContent = "x";
  noteEl.appendChild(button);
  button.addEventListener("click", function () {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  // setup the note title text
  if (note.title.length > 0) {
    textElLink.textContent = note.title;
  } else {
    textElLink.textContent = "Unnammed note";
  }
  textElLink.setAttribute("href", `/edit.html#${note.id}`);
  noteEl.appendChild(textElLink);

  return noteEl;
};

// render application notes
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (e) {
    const noteEl = generateNoteDOM(e);
    document.querySelector("#notes").appendChild(noteEl);
  });
};
