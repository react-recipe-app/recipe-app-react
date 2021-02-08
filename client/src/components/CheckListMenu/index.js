import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "rgba(245, 212, 79, 0.6)",
    marginTop: "10vh",
    borderRadius: "20px",
  },
  formControl: {
    margin: "10px",
    height: "auto",
  },
}));

function CheckListMenu() {
  const classes = useStyles();
  const [state, setState] = useState({});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(state);
  };
  return (
    <div className={classes.root}>
      <FormGroup row className={classes.formControl}>
        <FormLabel component="legend">Select what you have</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checkedI"
              onChange={handleChange}
            />
          }
          label="Custom size"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checkedI"
              onChange={handleChange}
            />
          }
          label="Custom size"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checkedI"
              onChange={handleChange}
            />
          }
          label="Custom size"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checkedI"
              onChange={handleChange}
            />
          }
          label="Custom size"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checkedI"
              onChange={handleChange}
            />
          }
          label="Custom size"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checkedI"
              onChange={handleChange}
            />
          }
          label="Custom size"
        />
      </FormGroup>
    </div>
  );
}

export default CheckListMenu;
