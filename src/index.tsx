import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { App } from "components/App";
import { muiTheme } from "muiTheme";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
