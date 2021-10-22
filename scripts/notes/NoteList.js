import { getNotes, useNotes } from "./NoteDataProvider.js";
import { Note } from "./Note.js";

const el = document.querySelector('.main-content');

document.querySelector('#notes-nav-link').addEventListener("click", function(){
  NoteList();
});

export const NoteList = () => {
  let html = '';

  getNotes()
  .then(() => {
    const notes = useNotes();

    html += `
      <section class="notes">
        <h2>Notes</h2>
        <div class="note-list flex-container">
    `;


    notes.forEach( noteObj => html += Note(noteObj));

    html += `
        </div>
      </section>
    `;

    el.innerHTML = html;
  });
}