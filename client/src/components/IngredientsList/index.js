import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "transparent",
    color: "#e1e6ea",
  },
}));

function IngredientsList({ ingredients }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {ingredients.map((item, i) => (
        <List key={i} component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText primary={item.text} />
          </ListItem>
          <Divider />
        </List>
      ))}
    </div>
  );
}

export default IngredientsList;
