import { getCriminals, useCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js";

const el = document.querySelector('.main-content');

document.querySelector("#criminals-nav-link").addEventListener("click", function(){
  CriminalList();          
});

export const CriminalList = (convictionType) => {
  
  let html = '';
  
  getCriminals()
  .then(() => {

    // If convictionType is undefined then just pull all criminals
    const criminals = convictionType ? 
      useCriminals().filter( criminal => criminal.conviction === convictionType) :
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
