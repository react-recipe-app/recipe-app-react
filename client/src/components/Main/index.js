import { useContext } from "react";
import Recipe from "../Recipe";
import RecipeContext from "../../contexts";
function Main() {
  const { recipes } = useContext(RecipeContext);
  return (
    <div>
      {recipes?.map((item, i) => (
        <Recipe />
      ))}
    </div>
  );
}

export default Main;
