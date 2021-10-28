import { NoteList } from "./NoteList.js";
import { saveNote, updateNote } from "./NoteDataProvider.js";

const newNote = { date: Date.now(), id: "", suspect: "", text: ""};

const el = document.querySelector('.note-form-container');

// Handler function for saving a note
// e is short for event
el.addEventListener("click", e => {
  if (e.target.id === "saveNote") {

    e.preventDefault();

    // Convert the date from it's default value
    const noteDate = new Date(document.querySelector('#note-date').value.split('-')).toLocaleDateString('en-US', { year: "numeric", day: "numeric", month: "numeric"});

    // Ternary object assignment spaghetti
    // noteData will be edited if it has a note id attached to it
    // or else its going to be a new note without an id
    const noteData = el.querySelector('#note-id').value ? {
      date: noteDate,
      suspect: document.querySelector('#note-suspect').value,
      text: document.querySelector('#note-text').value,
      id: document.querySelector('#note-id').value
    } : {
      date: noteDate,
      suspect: document.querySelector('#note-suspect').value,
      text: document.querySelector('#note-text').value,
      id: ''
    }

    // Clear form values after creating form body data
    document.querySelector('#note-date').value = '';
    document.querySelector('#note-suspect').value = '';
    document.querySelector('#note-text').value = '';
    document.querySelector('#note-id').value = '';

    // If any of the form values are empty then display where valid information is needed
    if (noteData.date === 'Invalid Date' || noteData.suspect === '' || noteData.text === '') {
      alert('Please enter valid values')

    // Otherwise we can go ahead and make this a new note, or update note
    } else {

      if (noteData.id) {
        updateNote(noteData)
        .then(() => {
          NoteList();
          NoteForm();
        });
      } else {
        saveNote(noteData)
        .then(NoteList);
      }

    }
  }
});


export const NoteForm = (note = newNote) => {

  const action = note.id !== '' ? "Edit" : "Save";

  el.innerHTML = `
  <form>
    <div>
      <label>Date:</label>
    </div>
      <input type="date" id="note-date" value="${new Date(note.date).toISOString().slice(0, 10)}">
    <div>
      <label>Suspect:</label>
    </div>
      <input type="text" id="note-suspect" placeholder="Who's Looking Sus?" value="${note.suspect}">
    <div>
      <label>Note:</label>
    </div>
      <textarea id="note-text" placeholder="What is Making them Sus?!">${note.text}</textarea>
    <div>
      <input id="note-id" type="text" value="${note.id}" hidden>
      <button id="saveNote">${action} Note</button>
    </div>
  </form>
  `;
}