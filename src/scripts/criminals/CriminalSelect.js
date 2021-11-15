import { getCriminals, useCriminals } from "./CriminalDataProvider.js";

export const CriminalSelect = (criminalId) => {
  getCriminals().then(() => {
    render(useCriminals(), criminalId);
  });
}

const render = (criminalCollection, criminalId) => {
  document.querySelector('.criminal-select-container').innerHTML = `
    <select id="noteForm--criminal" class="criminalSelect">
      <option value="0">Who's Looking Sus?</option>
      ${ 
        criminalCollection.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`).join('') 
      }
    </select>
  `;

  if (criminalId) {
    document.querySelector(`.criminalSelect option[value="${criminalId}"]`).selected = true;
  }
}