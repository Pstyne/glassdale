import { urlBuilder } from '../helpers/urlBuilder.js';


let criminals = [];

export const useCriminals = () => {
  return criminals.slice();
}

export const getCriminals = () => {
  return fetch(urlBuilder('criminals'))
          .then(res => res.json())
          .then(data => criminals = data);
}