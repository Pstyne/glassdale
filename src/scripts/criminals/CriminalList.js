import { getCriminals, useCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js";
import { getFacilities, useFacilities } from "../facilities/FacilityDataProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js";

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
  .then(getFacilities)
  .then(getCriminalFacilities)
  .then(() => {

    const facilities = useFacilities();
    const criminalFacilities = useCriminalFacilities();

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

    html += render(criminals, facilities, criminalFacilities);

    html += `
      </div>
    </section>
    `;
    
    el.innerHTML = html;
  });     
}

const render = (criminalsToRender, allFacilities, allRelationships) => {
  return criminalsToRender.map(criminalObj => {
    const criminalsFacilities = allRelationships.filter(cf => cf.criminalId === criminalObj.id);
    const facilities = criminalsFacilities.map(cf => allFacilities.find(facility => facility.id === cf.facilityId));
    return Criminal(criminalObj, facilities);
  }).join('');
}
