import React from "react";
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core";

import Home from "./Home";

makeStyles({ root: {} });

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: { main: "#006974" },
      secondary: { main: "#015f92" },
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      border: "2px solid #000",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
