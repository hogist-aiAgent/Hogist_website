import './App.css';
import MainRoutes from './routes/MainRoutes';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainRoutes />
    </ThemeProvider>
  );

}

export default App;
