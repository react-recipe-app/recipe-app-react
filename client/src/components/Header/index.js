import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
  Container,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "rgba(57, 57, 59, 0.1)",
    marginTop: "50px",
  },
  title: {
    flexGrow: 1,
    fontSize: "30px",
    marginLeft: "20px",
  },
  logo: {
    color: "#4488d1",
    "&:hover": {
      textDecoration: "none",
    },
  },
  btn: {
    color: "#d9502e",
    marginLeft: "4px",
    background: "#f5d44f",
    fontWeight: "700",
  },
  input: {
    color: "white",
  },
}));

function Header() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <TextField
          className={classes.input}
          style={{ color: "white" }}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <Typography variant="div" className={classes.title}>
          <Link href="#" onClick={preventDefault} className={classes.logo}>
            Ne var ki acaba?
          </Link>
        </Typography>
        <Button variant="outlined" className={classes.btn}>
          Login
        </Button>
        <Button variant="outlined" className={classes.btn}>
          Sign ın
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
