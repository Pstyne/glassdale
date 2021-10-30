import { getCriminals, useCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js";

const el = document.querySelector('.main-content');

document.querySelector("#criminals-nav-link").addEventListener("click", function(){
  CriminalList();          
});

// @params
//  prop: string (ex. criminal.arrestingOfficer where prop is 'arrestingOfficer') 
//  value: string (ex. 'Gino Hill')
//  ex. useCriminals().filter( criminal => criminal['arrestingOfficer'] === 'Gino Hill')
export const CriminalList = (prop, val) => {
  
  let html = '';
  
  getCriminals()
  .then(() => {

    // If property to filter and value to search is undefined then just pull all criminals
    const criminals = (prop && val) ? 
      useCriminals().filter( criminal => criminal[prop] === val) :
      useCriminals();

    html += `
    <!-- Begin Criminal List -->
    <section class="criminals">
      <h2>Criminals</h2>
      <div class="convictions-select-container"></div>
      <div class="criminal-list flex-container">
    `;

    criminals.forEach( criminalObj => html += Criminal(criminalObj));

    html += `
      </div>
    </section>
    `;
    
    el.innerHTML = html;
  });     
}
