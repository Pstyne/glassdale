import { CriminalList } from "../criminals/CriminalList.js";
import { getOfficers, useOfficers } from "./OfficerDataProvider.js"

const officerFilter = document.querySelector('.filters__officer');

officerFilter.addEventListener('change', e => {
  if (e.target.id === 'officerSelect') {
    const officerID = e.target.value;
    const officerName = e.target[officerID].innerText;
    CriminalList('arrestingOfficer', officerName);
  }
});

export const OfficerSelect = () => {
  getOfficers().then(() => {
    const officers = useOfficers();
    render(officers);
  });
}

const render = officerCollection => {
  officerFilter.innerHTML = `
    <select id="officerSelect">
      <option value="0">Please select an officer...</option>
      ${
        officerCollection.map(officer => `<option value="${officer.id}">${officer.name}</option>`)
      }
    </select>
  `;
}