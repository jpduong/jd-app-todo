import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "components/App";
import reportWebVitals from "./reportWebVitals";
import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

export const COLORS = {
  VERY_DARK_BLUE: "#161722",
  VERY_DARK_DESATURATED_BLUE: "#25273c",
  LIGHT_GRAY_BLUE: "#cacde8",
  LIGHT_GRAY_BLUE_HOVER: "#e4e5f1",
  DARK_GRAY_BLUE: "#777a92",
  VERY_DARK_GRAY_BLUE_1: "#4d5066",
  VERY_DARK_GRAY_BLUE_2: "#393a4c",
  LIGHT_BLUE: "#4B7BE0",
  PURPLE: "#25283D",
};

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#181824",
      },
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#181824",
        },
      },
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "transparent",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Josefin Sans", "sans-serif"].join(","),
    body1: {
      fontSize: 14,
      [breakpoints.up("sm")]: {
        fontSize: 16,
      },
    },
    subtitle2: {
      color: COLORS.DARK_GRAY_BLUE,
      fontSize: 12,
      [breakpoints.up("sm")]: {
        fontSize: 14,
      },
    },
    h4: {
      letterSpacing: "10px",
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
      disableTouchRipple: true,
    },
    MuiSvgIcon: {
      htmlColor: COLORS.DARK_GRAY_BLUE,
    },
    MuiTextField: {
      InputProps: {
        disableUnderline: true,
      },
      style: {
        width: 250,
      },
    },
    MuiSelect: {
      disableUnderline: true,
    },
  },
  palette: {
    type: "dark",
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
