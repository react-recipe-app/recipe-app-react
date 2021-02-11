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
import { getRecipe } from "../../service";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8,
    backgroundColor: fade("#fff", 0.7),
    marginTop: 20,
  },
  media: {
    height: 0,
    paddingTop: "90%",
  },
  title: {
    color: "black",
    padding: 6,
    textAlign: "center",
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
}));

function Recipe() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg"
        title="Paella dish"
      />
      <CardHeader
        className={classes.title}
        title="Grilled Butterflied Chicken Recipe"
      />
      <CardContent className={classes.desc}>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests.
        </Typography>
      </CardContent>
      <CardActions spacing={2}>
        <IconButton className={classes.icon} aria-label="add to favorites">
          <StarIcon />
        </IconButton>
        <span>234</span>
        <div style={{ marginLeft: "auto" }}>
          <Button href="#" className={classes.button}>
            Detail
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
export default Recipe;
