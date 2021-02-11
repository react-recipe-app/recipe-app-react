import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import { Grid, Container } from "@material-ui/core";
import { RecipeProvider } from "./contexts/RecipeContext";
function App() {
  return (
    <div>
      <Container>
        <Grid container xs={12} spacing={4}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
        </Grid>
      </Container>
      <RecipeProvider>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container justify="center" className="main">
          <Grid item xs={12}>
            <Main />
          </Grid>
        </Grid>
      </RecipeProvider>
    </div>
  );
}

export default App;
