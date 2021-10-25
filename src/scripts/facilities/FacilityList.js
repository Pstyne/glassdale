import { getFacilities, useFacilities } from "./FacilityDataProvider.js";
import { Facility } from "./Facility.js";

const el = document.querySelector('.main-content');

document.querySelector('#facilities-nav-link').addEventListener("click", function(){
  FacilityList();
});

export const FacilityList = () => {
  let html = '';
  
  getFacilities()
  .then(() => {
    const facilities = useFacilities();

    html += `
    <!-- Begin Facility List -->
    <section class="facilities">
      <h2>Facilities</h2>
      <div class="facility-list flex-container">
    `;

    facilities.forEach( facilityObj => html += Facility(facilityObj));

    html += `
      </div>
    </section>
    `;
    
    el.innerHTML = html;
  });

}