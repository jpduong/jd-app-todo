import { createMuiTheme } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { COLORS } from "./constants";
import "./index.css";

const breakpoints = createBreakpoints({});

export const muiTheme = createMuiTheme({
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
      icon: {
        color: COLORS.DARK_GRAY_BLUE,
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
    },
    MuiSelect: {
      disableUnderline: true,
    },
  },
  palette: {
    type: "dark",
  },
});
