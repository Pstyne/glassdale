import { urlBuilder } from "../helpers/urlBuilder.js";

let facilities = [];

export const useFacilities = () => {
  return facilities.slice();
}

export const getFacilities = () => {
  return fetch(urlBuilder('facilities'))
          .then(res => res.json())
          .then(data => facilities = data);
}