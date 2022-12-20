import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#A259FF",
    },
    secondary: { main: "#3b3b3b" },
    background: {
      default: "#2B2B2B",
    },
  },

  typography: {
    fontFamily: ["Work Sans", "sans-serif"].join(","),
    fontSize: 16,
    h1: {
      fontFamily: ["Work Sans", "sans-serif"].join(","),
      fontSize: 67,
      fontWeight: 600,
      lineHeight: "110%",
    },
    h2: {
      fontFamily: ["Work Sans", "sans-serif"].join(","),
      fontWeight: 600,
      fontSize: 51,
      lineHeight: "110%",
    },
    h3: {
      fontFamily: ["Work Sans", "sans-serif"].join(","),
      fontWeight: 600,
      fontSize: 38,
      lineHeight: "120%",
    },
    h4: {
      fontFamily: ["Work Sans", "sans-serif"].join(","),
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "140%",
    },
    h5: {
      fontFamily: ["Work Sans", "sans-serif"].join(","),
      fontWeight: 600,
      fontSize: 22,
      lineHeight: "140%",
    },
    body1: {
      fontFamily: ["Work Sans", "sans-serif"].join(","),
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "140%",
    },
    caption: {
      fontFamily: ["Work Sans", "sans-serif"].join(","),
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "110%",
    },
  },
});
