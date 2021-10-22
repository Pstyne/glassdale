import { OfficerList } from "./officers/OfficerList.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { FacilityList } from "./facilities/FacilityList.js";

// OfficerList();
// FacilityList();

const darkModeButton = document.querySelector('#dark-mode');

darkModeButton.addEventListener("click", function(){
  const el = document.querySelector('body');
  el.classList.toggle("dark-background");
});
