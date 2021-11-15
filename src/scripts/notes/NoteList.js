import { getNotes, useNotes } from "./NoteDataProvider.js";
import { Note } from "./Note.js";
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";

const el = document.querySelector('.main-content');

document.querySelector('#notes-nav-link').addEventListener("click", function(){
  NoteList();
});

const render = (noteCollection, criminalCollection) => {
  noteCollection = noteCollection.reverse();
  el.innerHTML = noteCollection.map(note => {
    // debugger;
    // Find the related criminal
    const relatedCriminal = criminalCollection.find(criminal => criminal.id.toString() === note.criminalId)

    return `
    <section id="note-${note.id}" class="note">
      <h3 class="note__suspect">${relatedCriminal.name}</h3>
      <p class="note__date">${note.date}</p>
      <p class="note__text">${note.text}</p>
      <button id="editNote--${note.id}">Edit</button>
      <button id="deleteNote--${note.id}">Delete</button>
    </section>
      `
  })
}

export const NoteList = () => {
  getNotes()
  .then(getCriminals)
  .then(() => {
    render(useNotes(), useCriminals());
  });
}