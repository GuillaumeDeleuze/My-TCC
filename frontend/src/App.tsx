import React from 'react';
import Routes from './routes';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5B5EA6'
    },
    secondary: {
      main: '#00dada' //a définir
    }
  },
  typography: {
    h5: {
      fontSize: '1rem',
      color: '#737373',
      fontWeight: 700,
      lineHeight: 1.334
    },
    body1: {
      fontSize: '1.1rem',
      color: '#000000'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Routes />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
