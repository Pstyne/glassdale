import { getOfficers, useOfficers } from "./OfficerDataProvider.js"
import { Officer } from "./Officer.js";

const el = document.querySelector('.main-content');

document.querySelector('#officers-nav-link').addEventListener("click", function(){
  OfficerList();
});

export const OfficerList = () => {
  let html = '';
  
  getOfficers()
  .then(() => {
    const officers = useOfficers();

    html += `
    <!-- Begin Officer List -->
    <section class="officers">
      <h2>Officers</h2>
      <div class="officer-list flex-container">
    `;

    officers.forEach( officerObj => html += Officer(officerObj));
    
    html += `
      </div>
    </section>
    `;
    
    el.innerHTML = html;
  });
}