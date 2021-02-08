import Header from "./components/Header";
import Main from "./components/Main";
import CheckListMenu from "./components/CheckListMenu";
import "./App.css";

import { Grid, Container } from "@material-ui/core";
function App() {
  return (
    <div className="App">
      <Container>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={3}>
            <CheckListMenu />
          </Grid>
          <Grid item xs={9}>
            <Main />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
