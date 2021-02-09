import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const theme = createMuiTheme({
  overrides: {
    MuiList: {
      root: {
        backgroundColor: "rgba(245, 212, 79,0.8)",
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
    <div>
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
        <Divider />
      </ThemeProvider>
    </div>
  );
}

export default CheckListMenu;
