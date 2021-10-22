import { getFacilities, useFacilities } from "./FacilityDataProvider.js";
import { Facility } from "./Facility.js";

const el = document.querySelector('.facility-list');

export const FacilityList = () => {
  let html = '';
  
  getFacilities()
  .then(() => {
    const facilities = useFacilities();

    facilities.forEach( facilityObj => html += Facility(facilityObj));

    el.innerHTML = html;
  });

}