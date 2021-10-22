import { urlBuilder } from '../helpers/urlBuilder.js';

let officers = [];

export const useOfficers = () => {
  return officers.slice();
}

export const getOfficers = () => {
  return fetch(urlBuilder('officers'))
          .then( res => res.json())
          .then( data => officers = data);
}