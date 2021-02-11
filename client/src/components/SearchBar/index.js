import { useState } from "react";
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
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { checkboxHealthLabels, checkboxDietLabels } from "./checkboxItems";
const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        backgroundColor: "#e1e6ea",
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#e1e6ea",
        },
      },
      notchedOutline: {
        borderColor: "#d9502e",
        border: "3px solid",
      },
    },
    MuiButton: {
      root: {
        backgroundColor: "#e1e6ea",
      },
      outlinedPrimary: {
        "&:hover": {
          backgroundColor: "#d9502e",
          color: "#e1e6ea",
        },
      },
    },
    MuiList: {
      root: {
        color: "#d9502e",
      },
    },
  },
  palette: {
    primary: {
      main: "#d9502e",
    },
    secondary: {
      main: "#e1e6ea",
    },
  },
});

function SearchBar() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [listItemOpen, setlistItemOpen] = useState({
    healthLabels: false,
    dietLabels: false,
    caloriesLabels: false,
  });

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

  //******* checkbox */
  const [checkedHealth, setCheckedHealth] = useState(checkboxHealthLabels);
  const [checkedDiet, setCheckedDiet] = useState(checkboxDietLabels);

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
  const handleChangeDiet = ({ target }) => {
    const { name } = target;
    const index = checkedDiet.findIndex((obj) => obj.name === name);
    setCheckedDiet([
      ...checkedDiet.slice(0, index),
      { name, checked: target.checked },
      ...checkedDiet.slice(index + 1),
    ]);
  };
  //******* checkbox */
  const [state, setChecked] = useState({
    checkedA: true,
    checkedB: false,
    checkedF: true,
    checkedG: true,
  });
  const handleChange = (event) => {
    setChecked({ ...state, [event.target.name]: event.target.checked });
    console.log(state);
  };
  console.log(checkedDiet);
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
                        />
                      }
                      label={item.name}
                    />
                  ))}
                </FormGroup>
              </Collapse>
              <ListItem button onClick={() => handleClick("caloriesLabels")}>
                <ListItemText primary="Calories" />
                {listItemOpen.caloriesLabels ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={listItemOpen.caloriesLabels}
                timeout="auto"
                unmountOnExit
              >
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                      />
                    }
                    label="Secondary"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Banane"
                  />
                </FormGroup>
              </Collapse>
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Get Recipes
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}

export default SearchBar;
