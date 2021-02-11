import axios from "axios";

const APP_ID = "3d8e859c";
const APP_KEY = "45ba4f09285e54937025c4bd2c833ed5";
export const getRecipe = async () => {
  const response = await axios
    .get(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100`
    )
    .then((r) => r.data);
  //console.log(response.hits);
  return response.hits;
};
