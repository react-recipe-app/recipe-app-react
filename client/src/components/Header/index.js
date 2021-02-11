import React from "react";
import { Typography, Grid } from "@material-ui/core";
import SearchBar from "../SearchBar";
function Header() {
  return (
    <div style={{ height: "40vh", marginTop: "10vh" }}>
      <Grid container direction="column" xs={12}>
        <Grid container xs={12}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Typography
              style={{ color: "#e1e6ea" }}
              variant="h6"
              align="center"
              color="primary"
            >
              ENJOY YOUR HEALTHY DELICIOUS MEAL
            </Typography>
            <Typography
              style={{ color: "#f5d44f" }}
              variant="h1"
              align="center"
              color="primary"
            >
              Treat Yourself
            </Typography>
            <Typography
              style={{ color: "#e1e6ea" }}
              variant="h6"
              align="center"
              color="primary"
            >
              Find recipes using ingredients you already have in the kitchen!
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid xs={3}></Grid>
          <Grid item xs={6}>
            <SearchBar />
          </Grid>
          <Grid xs={3}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
