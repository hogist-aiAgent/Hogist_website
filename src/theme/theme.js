// src/theme.js
import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins'; // if you installed via npm

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
      secondary:"#c60800",
      

    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#f8f8f8',
    },
    flex:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    }
  },
  shape: {
    borderRadius: 12,
  },

  fontFamily:{
    default:"Poppins, sans-serif"
  }
});

export default theme;
