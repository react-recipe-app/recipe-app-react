import axios from "axios";

const appID = process.env.REACT_APP_API_ID;
const appKey = process.env.REACT_APP_API_KEY;
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
export const getRecipe = (
  healthValues,
  dietValues,
  caloriValues,
  ingredients
) => {
  const data = axios.get(
    `${API_ENDPOINT}app_id=${appID}&app_key=${appKey}&from=0&to=12&calories=${caloriValues}&health=${healthValues}&diet=${dietValues}&q=${ingredients}`
  );
  return data;
};
