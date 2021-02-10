import axios from "axios";

const appID = "34d234a5";
const appKey = "2f3cb1d86a0e0fe36f797c0b5a9041e0";

export const getRecipe = () => {
  const data = axios.get(
    `https://api.edamam.com/search?q=chicken&app_id=${appID}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free`
  );
  return data;
};
