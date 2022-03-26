import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans - serif"],
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    mode: "light",
  },
});

export default lightTheme;
