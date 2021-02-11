import React from "react";
import Recipe from "../Recipe";
import Grid from "@material-ui/core/Grid";

function RecipeList() {
  return (
    <div>
      <>
        <Grid container justify="center" spacing={2}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value) => (
            <Grid key={value} item md={3} sm={6} xs={12}>
              <Recipe />
            </Grid>
          ))}
        </Grid>
      </>
    </div>
  );
}

export default RecipeList;
