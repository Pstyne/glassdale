import { OfficerList } from "./officers/OfficerList.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { FacilityList } from "./facilities/FacilityList.js";
import { NoteList } from "./notes/NoteList.js";
import { NoteForm } from "./notes/NoteForm.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";

const darkModeButton = document.querySelector('#dark-mode');

darkModeButton.addEventListener("click", e => {
  const el = document.querySelector('body');
  el.classList.toggle("dark-background");
  e.target.innerText = e.target.innerText.startsWith('Imposter') ? 'Crewmate Mode' : 'Imposter Mode';
});

NoteForm();
ConvictionSelect();
OfficerSelect();