import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import IngredientsList from "../IngredientsList";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialog: {
    backgroundColor: "#d9502e",
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Details({ details }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Details
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-slide-label">{details.label}</DialogTitle>
        <DialogTitle
          id="alert-dialog-slide-cuisineType"
          style={{ backgroundColor: "#f5d44f" }}
        >
          Cuisine Type : {details.cuisineType}
        </DialogTitle>
        <DialogContent className={classes.dialog}>
          <DialogContentText id="alert-dialog-slide-description">
            <IngredientsList ingredients={details.ingredients} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button href={details.url} onClick={handleClose} color="primary">
            Go to recipe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Details;
