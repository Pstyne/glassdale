let notes = [];

export const useNotes = () => {
  return notes.slice();
}

export const getNotes = () => {
  return fetch('http://localhost:8088/notes')
          .then(res => res.json())
          .then(data => notes = data);
}

export const saveNote = note => {
  return fetch('http://localhost:8088/notes', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(note)
  })
  .then(getNotes)
}