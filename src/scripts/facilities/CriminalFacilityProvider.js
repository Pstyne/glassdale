import { urlBuilder } from "../helpers/urlBuilder.js";

let criminalFacilities = [];

export const useCriminalFacilities = () => {
  return criminalFacilities.slice();
}

export const getCriminalFacilities = () => {
  return fetch(urlBuilder('criminalFacilities'))
  .then(response => response.json())
  .then(apiData => {
    criminalFacilities = apiData
  });
}