import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, createTheme } from "@mui/material";
import "./index.css";

import { router } from "./router/Index";
import { RouterProvider } from "react-router-dom";
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#242424',
    },
    secondary: {
      main: '#1A1A1A',
    },
    background: {
      default: '#212121',
      paper: '#424242',
    },
    text: {
      primary: '#E3E3E3',
      secondary: '#E3E3E3',
      hint:"#7B7B7B",
    },

  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> 
    <CssBaseline/>
    <ThemeProvider theme={theme}>
     
    <RouterProvider router={router} />
    
      
    </ThemeProvider>

  </React.StrictMode>
);
