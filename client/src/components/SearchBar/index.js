import { useState, useContext } from "react";
import RecipeContext from "../../contexts/RecipeContext";
import { getRecipe } from "../../serviceWorker";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
  checkboxHealthLabels,
  checkboxDietLabels,
  checkboxCaloriesLabels,
} from "./checkboxItems";

function SearchBar() {
  const [open, setOpen] = useState(false);
  const [listItemOpen, setlistItemOpen] = useState({
    healthLabels: false,
    dietLabels: false,
    caloriesLabels: false,
  });
  const [checkedHealth, setCheckedHealth] = useState(checkboxHealthLabels);
  const [checkedDiet, setCheckedDiet] = useState(checkboxDietLabels);
  const [caloriValue, setCaloriValue] = useState("");
  const [ingredients, setIngredients] = useState("");

  //usecontext
  const { setRecipes } = useContext(RecipeContext);

  const handleClose = () => {
    setOpen(false);
    setIngredients("");
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClick = (listitem) => {
    switch (listitem) {
      case "healthLabels":
        setlistItemOpen({
          ...listItemOpen,
          healthLabels: !listItemOpen.healthLabels,
        });
        break;
      case "dietLabels":
        setlistItemOpen({
          ...listItemOpen,
          dietLabels: !listItemOpen.dietLabels,
        });
        break;
      case "caloriesLabels":
        setlistItemOpen({
          ...listItemOpen,
          caloriesLabels: !listItemOpen.caloriesLabels,
        });
        break;

      default:
        break;
    }
  };

  // healthlabels
  const handleChangeHealth = ({ target }) => {
    const { name } = target;
    const index = checkedHealth.findIndex((obj) => obj.name === name);
    setCheckedHealth([
      ...checkedHealth.slice(0, index),
      { name, checked: target.checked },
      ...checkedHealth.slice(index + 1),
    ]);
  };
  // dietlabels
  const handleChangeDiet = ({ target }) => {
    const { name } = target;
    const index = checkedDiet.findIndex((obj) => obj.name === name);
    setCheckedDiet([
      ...checkedDiet.slice(0, index),
      { name, checked: target.checked },
      ...checkedDiet.slice(index + 1),
    ]);
  };

  /*  ingredients input*/

  const handleIngredients = (e) => {
    setIngredients(e.target.value);
  };
  /*  ingredients input*/
  const handleCaloriValue = ({ target }) => {
    setCaloriValue(target.value);
  };
  /* get all values and set querystring */
  let healthValues = checkedHealth
    .filter((value) => value.checked)
    .map((value) => value.name)
    .join()
    .toLowerCase();
  let dietValues = checkedDiet
    .filter((value) => value.checked)
    .map((value) => value.name)
    .join()
    .toLowerCase();

  /* get all values and set querystring */
  const getRecipes = () => {
    getRecipe(healthValues, dietValues, caloriValue, ingredients).then((res) =>
      setRecipes(res.data.hits)
    );
  };
  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <ThemeProvider theme={theme}>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
          Search
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Select What You Want</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="ingredients"
              fullWidth
              value={ingredients}
              onChange={handleIngredients}
            />
            <List>
              <ListItem button onClick={() => handleClick("healthLabels")}>
                <ListItemText primary="Health Labels" />
                {listItemOpen.healthLabels ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={listItemOpen.healthLabels}
                timeout="auto"
                unmountOnExit
              >
                <FormGroup row>
                  {checkboxHealthLabels.map((item, i) => (
                    <FormControlLabel
                      key={i}
                      control={
                        <Checkbox
                          checked={checkedHealth.name}
                          onChange={handleChangeHealth}
                          inputProps={{ "aria-label": "primary checkbox" }}
                          color="primary"
                          name={item.name}
                        />
                      }
                      label={item.name}
                    />
                  ))}
                </FormGroup>
              </Collapse>
              <ListItem button onClick={() => handleClick("dietLabels")}>
                <ListItemText primary="Diet Labels" />
                {listItemOpen.dietLabels ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={listItemOpen.dietLabels}
                timeout="auto"
                unmountOnExit
              >
                <FormGroup row>
                  {checkboxDietLabels.map((item, i) => (
                    <FormControlLabel
                      key={i}
                      control={
                        <Checkbox
                          checked={checkedDiet.name}
                          onChange={handleChangeDiet}
                          inputProps={{ "aria-label": "primary checkbox" }}
                          color="primary"
                          name={item.name}
                        />
                      }
                      label={item.name}
                    />
                  ))}
                </FormGroup>
              </Collapse>
              <ListItem button onClick={() => handleClick("caloriesLabels")}>
                <ListItemText primary="Calories (Default Serving is 100g)" />
                {listItemOpen.caloriesLabels ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={listItemOpen.caloriesLabels}
                timeout="auto"
                unmountOnExit
              >
                <FormGroup row>
                  {checkboxCaloriesLabels.map((item, i) => (
                    <RadioGroup
                      key={i}
                      aria-label="gender"
                      name="gender1"
                      value={caloriValue}
                      onChange={handleCaloriValue}
                    >
                      <FormControlLabel
                        value={item.name}
                        control={<Radio color="primary" />}
                        label={item.name}
                      />
                    </RadioGroup>
                  ))}
                </FormGroup>
              </Collapse>
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={getRecipes} color="primary">
              Get Recipes
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}

export default SearchBar;
