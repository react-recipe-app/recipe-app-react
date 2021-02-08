import React from "react";
import {
    Input,
    Toolbar,
    Button
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";


  const useStyles = makeStyles((theme) => ({
    btn: {
        color: "#d9502e",
        marginLeft: "4px",
        background: "#f5d44f",
        fontWeight: "700",
      },
    placehldr: {
        color: "#F2A034",
        textDecoration: "none"
    }
}));
  function SearchBar(){
    const classes = useStyles();
      return (
    <Toolbar>   
        <form >
            <Input placeholder="Elimde Ne Var?" className={classes.placehldr} />
            <Button onClick={()=>alert("Hello")} variant="outlined" className={classes.btn} >
             Search
            </Button>
        </form>
    </Toolbar>
      );
  }

  export default SearchBar;