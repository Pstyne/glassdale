import { urlBuilder } from "../helpers/urlBuilder.js";

let convictions = [];

export const useConvictions = () => convictions.slice();

export const getConvictions = () => {
  return fetch(urlBuilder('crimes'))
  .then(res => res.json())
  .then(data => convictions = data);
}