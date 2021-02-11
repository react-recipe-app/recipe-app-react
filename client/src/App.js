import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/Main";
import CheckListMenu from "./components/CheckListMenu";
import "./App.css";

import { Grid, Container } from "@material-ui/core";
function App() {
  return (
    <div>
      <Container>
        <Grid container xs={12} spacing={4}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item xs={12}>
            <Header />
          </Grid>
        </Grid>
      </Container>
      <Grid container justify="center" className="main">
        <Grid item xs={2}>
          <CheckListMenu />
        </Grid>
        <Grid item xs={8}>
          <Main />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
