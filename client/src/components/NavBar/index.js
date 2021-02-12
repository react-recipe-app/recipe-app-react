import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "rgba(57, 57, 59, 0.1)",
    marginTop: "50px",
  },
  title: {
    flexGrow: 0,
    fontSize: "30px",
    marginLeft: "20px",
    width: "400px",
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
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Header() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <AppBar id="appbar" position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="div" className={classes.title}>
          <Link href="#" onClick={preventDefault} className={classes.logo}>
            What Do You Want to Cook ?
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
