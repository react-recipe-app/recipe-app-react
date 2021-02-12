import axios from "axios";

const appID = "900da95e";
const appKey = "40698503668e0bb3897581f4766d77f9";

export const getRecipe = (
  healthValues,
  dietValues,
  caloriValues,
  ingredients
) => {
  const data = axios.get(
    `https://api.edamam.com/search?app_id=${appID}&app_key=${appKey}&from=0&to=12&calories=${caloriValues}&Health=${healthValues}&Diet=${dietValues}&q=${ingredients}`,
    {
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }
  );
  return data;
};
