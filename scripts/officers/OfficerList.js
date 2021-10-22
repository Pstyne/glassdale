import { getOfficers, useOfficers } from "./OfficerDataProvider.js"
import { Officer } from "./Officer.js";

const el = document.querySelector('.officers');

export const OfficerList = () => {
  let html = '';
  
  getOfficers()
  .then(() => {
    const officers = useOfficers();

    officers.forEach( officerObj => html += Officer(officerObj));
    
    el.innerHTML = html;
  });
}