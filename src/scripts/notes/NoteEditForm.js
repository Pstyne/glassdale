import { updateNote, useNotes } from "./NoteDataProvider.js";
import { NoteForm } from "./NoteForm.js";
import { NoteList } from "./NoteList.js";

const noteFormContainer = document.querySelector('.note-form-container');

noteFormContainer.addEventListener('click', e => {
  if (e.target.id.startsWith('saveNote')) {
    e.preventDefault();

    const noteDate = new Date(document.querySelector('#note-date').value).toLocaleDateString('en-US');
    
    const editedNote = {
      date: noteDate,
      suspect: document.querySelector('#note-suspect').value,
      text: document.querySelector('#note-text').value
    }

    // Clear form values after creating form body data
    document.querySelector('#note-date').value = '';
    document.querySelector('#note-suspect').value = '';
    document.querySelector('#note-text').value = '';

    // If any of the form values are empty then display where valid information is needed
    if (editedNote.date === 'Invalid Date' || editedNote.suspect === '' || editedNote.text === '') {
      alert('Please enter valid values')

    // Otherwise we can go ahead and make this a new note
    } else {



      updateNote(editedNote)
      .then(NoteList)
      .then(NoteForm);
    }
  }
});

export const NoteEditForm = id => {
  const noteToEdit = useNotes().find( note => note.id.toString() === id);

  noteFormContainer.innerHTML = `
  <form>
    <div>
      <label>Date:</label>
    </div>
      <input type="date" id="note-date" value="${new Date(noteToEdit.date).toISOString().slice(0, 10)}">
    <div>
      <label>Suspect:</label>
    </div>
      <input type="text" id="note-suspect" placeholder="Who's Looking Sus?" value="${noteToEdit.suspect}">
    <div>
      <label>Note:</label>
    </div>
      <textarea id="note-text" placeholder="What is Making them Sus?!">${noteToEdit.text}</textarea>
    <div>
      <input id="note-id" type="text" value="${noteToEdit.id}" hidden>
      <button id="saveNote">Save Note</button>
    </div>
  </form>
  `;
}