import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        backgroundColor: "#e1e6ea",
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#e1e6ea",
        },
      },
      notchedOutline: {
        borderColor: "#d9502e",
        border: "3px solid",
      },
    },
  },
});
function SearchBar() {
  const [value, setValue] = useState("");
  const handleClick = (e) => {
    console.log(value);
    setValue("");
    e.preventDefault();
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <ThemeProvider theme={theme}>
        <form onSubmit={handleClick}>
          <TextField
            id="searchBar"
            placeholder="what you have ?"
            fullWidth
            variant="outlined"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </form>
      </ThemeProvider>
    </div>
  );
}

export default SearchBar;
