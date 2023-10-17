import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '20px',  // Your desired font size
          textTransform: 'none',  // If you don't want the text to be uppercase
          // ... any other styles you want to override or add
        },
      },
    },
  },
});