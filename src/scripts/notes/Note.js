import { CriminalSelect } from "../criminals/CriminalSelect.js";
import { deleteNote, useNotes } from "./NoteDataProvider.js";
import { NoteForm } from "./NoteForm.js";
import { NoteList } from "./NoteList.js";

const mainContentEvents = document.querySelector('.main-content');

mainContentEvents.addEventListener('click', e => {
  const noteId = e.target.id.split('--')[1];
  
  if (e.target.id.startsWith('editNote')) {
    const note = useNotes().find( note => note.id.toString() === noteId);
    NoteForm(note);
    CriminalSelect(note.criminalId);
  }
  
  if (e.target.id.startsWith('deleteNote')) {

    if (confirm('Are you sure you want to delete this note?')){
      deleteNote(noteId)
      .then(NoteList);
    }

  }
});

export const Note = (obj) => {
  return `
    <section id="note-${obj.id}" class="note">
      <h3 class="note__suspect">${obj.suspect}</h3>
      <p class="note__date">${obj.date}</p>
      <p class="note__text">${obj.text}</p>
      <button id="editNote--${obj.id}">Edit</button>
      <button id="deleteNote--${obj.id}">Delete</button>
    </section>
  `;
}