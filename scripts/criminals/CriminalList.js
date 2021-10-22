import { getCriminals, useCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js";

const el = document.querySelector('.criminal-list');

export const CriminalList = () => {
  let html = '';
  
  getCriminals()
  .then(() => {
    const criminals = useCriminals();

    criminals.forEach( criminalObj => html += Criminal(criminalObj));

    el.innerHTML = html;
  });
}