import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
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
    MuiButton: {
      root: {
        backgroundColor: "#e1e6ea",
      },
      outlinedPrimary: {
        "&:hover": {
          backgroundColor: "#d9502e",
          color: "#e1e6ea",
        },
      },
    },
    MuiList: {
      root: {
        color: "#d9502e",
      },
    },
  },
  palette: {
    primary: {
      main: "#d9502e",
    },
    secondary: {
      main: "#e1e6ea",
    },
  },
});
