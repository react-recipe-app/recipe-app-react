import { createContext, useState } from "react";

const RecipeContext = createContext(null);

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState();

  const values = {
    recipes,
    setRecipes,
  };

  return (
    <RecipeContext.Provider value={values}>{children}</RecipeContext.Provider>
  );
};

export default RecipeContext;
