import { deleteNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js";

const deleteNoteButton = document.querySelector('.main-content');

deleteNoteButton.addEventListener('click', e => {
  if (e.target.id.startsWith('deleteNote')) {
    const noteId = e.target.id.split('--')[1];

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
      <button id="deleteNote--${obj.id}">Delete</button>
    </section>
  `;
}