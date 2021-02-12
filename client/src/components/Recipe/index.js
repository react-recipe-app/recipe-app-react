import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import { fade } from "@material-ui/core/styles/colorManipulator";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Grid, Container } from "@material-ui/core";
import Details from "../Details";
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8,
    backgroundColor: fade("#fff", 0.7),
    marginTop: 20,
    width: "30vw",
  },
  media: {
    height: 0,
    paddingTop: "90%",
  },
  title: {
    color: "black",
    padding: 6,
    textAlign: "center",
    height: "150px",
  },
  icon: {
    color: "#F5D44F",
    padding: 3,
  },
  desc: {
    padding: 6,
  },
  button: {
    size: "medium",
    color: "#DA512F",
    textTransform: "none",
  },
  label: {
    width: "10px",
  },
}));

function Recipe({ recipe }) {
  const classes = useStyles();

  return (
    <Grid container xs={6}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={recipe.image}
            title="Paella dish"
          />
          <CardHeader className={classes.title} title={recipe.label} />
          <CardContent className={classes.desc}></CardContent>
        </CardActionArea>
        <CardActions spacing={2}>
          <span>Calories : {Math.floor(recipe.calories)} kcal</span>

          <div style={{ marginLeft: "auto" }}>
            <Details details={recipe} />
          </div>
        </CardActions>
        <CardActions spacing={2}>
          <span>Number of servings : {recipe.yield}</span>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default Recipe;
