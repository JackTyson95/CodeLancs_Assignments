import { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Todolist from './components/Todolist';

// Creating a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#f44336',
    },
  },
  typography: {
  fontFamily: 'Arial',
},
});

function App() {

  useEffect(() => {
    document.body.style.backgroundColor = 'black';
  }, []);

  return (
  <ThemeProvider theme={theme}>
    <div className="App" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Todolist style={{ margin: '0 20px', border: '2px solid blue' }} bgColor='lightblue' />
      <Todolist style={{ margin: '0 20px', border: '2px solid orange' }} bgColor='yellow'   />
      <Todolist style={{ margin: '0 20px', border: '2px solid green' }} bgColor='lightgreen' />
    </div>
  </ThemeProvider>
);
}

export default App;