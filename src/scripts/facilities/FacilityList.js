import { getFacilities, useFacilities } from "./FacilityDataProvider.js";
import { Facility } from "./Facility.js";
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js";

const el = document.querySelector('.main-content');

document.querySelector('#facilities-nav-link').addEventListener("click", function(){
  FacilityList();
});

export const FacilityList = () => {
  let html = '';
  
  getFacilities()
  .then(getCriminals)
  .then(getCriminalFacilities)
  .then(() => {

    const facilities = useFacilities();
    const criminals = useCriminals();
    const criminalFacilities = useCriminalFacilities();

    html += `
    <!-- Begin Facility List -->
    <section class="facilities">
      <h2>Facilities</h2>
      <div class="facility-list flex-container">
    `;

    html += render(facilities, criminals, criminalFacilities);

    html += `
      </div>
    </section>
    `;
    
    el.innerHTML = html;
  });

}

const render = (facilitiesToRender, allCriminals, allRelationships) => {
  return facilitiesToRender.map(facility => {
    const criminalsFacilities = allRelationships.filter(cf => cf.facilityId === facility.id);
    const criminals = criminalsFacilities.map(cf => allCriminals.find(criminal => criminal.id === cf.criminalId));
    return Facility(facility, criminals);
  }).join('');
}