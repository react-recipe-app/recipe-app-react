import { useContext } from "react";
import Recipe from "../Recipe";
import RecipeContext from "../../contexts/RecipeContext";
import { Grid } from "@material-ui/core";

function Main() {
  const { recipes } = useContext(RecipeContext);

  return (
    <div>
      <Grid container>
        {recipes?.map((item, i) => (
          <Grid item key={i} xs={4}>
            <Recipe key={i} recipe={item.recipe} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Main;
