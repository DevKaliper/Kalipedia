import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material'
import './index.css'
import App from './App';
const theme = createTheme( {
  palette: {
    type: 'light',
    primary: {
      main: '#6f8a2f',
    },
    secondary: {
      main: '#b8d274',
    },
    error: {
      main: '#d50000',
    },
    divider: '#88a246',
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
