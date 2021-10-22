const el = document.querySelector('.note-form-container');

el.addEventListener("click", e => {
  if (e.target.id === "saveNote") {
    console.log('save')
  }
});

export const NoteForm = () => {
  el.innerHTML = `
  
    <div>
    <label>Date:</label>
    </div>
    <input type="date" id="note-date">
    <div>
    <label>Suspect:</label>
    </div>
    <input type="text" id="note-suspect">
    <div>
    <label>Note:</label>
    </div>
    <textarea id="note-text"></textarea>
    <div>
    <button id="saveNote">Save Note</button>
    </div>
  
  `;
}