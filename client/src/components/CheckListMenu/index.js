import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const theme = createMuiTheme({
  overrides: {
    MuiList: {
      root: {
        backgroundColor: "white",
        borderRadius: "15px",
        color: "#4488d1",
      },
    },
    MuiTypography: {
      body1: {
        fontSize: "1.5rem",
        textAlign: "center",
      },
    },
  },
});

function CheckListMenu() {
  const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <ThemeProvider theme={theme}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText onClick={handleClick} primary="Breakfast" />
          </ListItem>
          <ListItem button>
            <ListItemText onClick={handleClick} primary="Breakfast" />
          </ListItem>
          <ListItem button>
            <ListItemText onClick={handleClick} primary="Breakfast" />
          </ListItem>
          <ListItem button>
            <ListItemText onClick={handleClick} primary="Breakfast" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Lunch" onClick={handleClick} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Dinner" onClick={handleClick} />
          </ListItem>
        </List>
      </ThemeProvider>
    </div>
  );
}

export default CheckListMenu;
