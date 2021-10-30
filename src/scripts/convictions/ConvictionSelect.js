import { CriminalList } from "../criminals/CriminalList.js";
import { getConvictions, useConvictions } from "./ConvictionProvider.js";

const selectTarget = document.querySelector('.filters__crime');

selectTarget.addEventListener('change', e => {

  if (e.target.id === 'crimeSelect'){

    // Because we can't filter by id we will filter by it's name
    const convictionID = e.target.value;
    const convictionType = e.target[convictionID].innerText;
    
    CriminalList('conviction', convictionType);
  }
  
});

export const ConvictionSelect = () => {
  getConvictions().then(() => {
    const convictions = useConvictions();
    render(convictions);
  });
}

const render = convictionsCollection => {
  selectTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
      <option value="0">Please select a crime...</option>
      ${
        // Colorizer is derping...
        convictionsCollection.map(conviction => {
          return `<option value="${conviction.id}">${conviction.name}</option>`;
        })
      }
    </select>
  `;
}