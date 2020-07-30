import { createMuiTheme } from '@material-ui/core/styles';

const BelloLight = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: '#1A202C',
    },
    primary: {
      main: '#EDEEEE',
    },
    secondary: {
      main: '#228B22',
    },
    background: {
      default: '#EDEEEE',
      paper: '#EDEEEE',
    },
  },
});

const BelloDark = createMuiTheme({
  palette: {
    type: 'dark',
    text: {
      primary: '#EDEEEE',
    },
    primary: {
      main: '#1A202C',
      contrastText: '#EDEEEE',
    },
    secondary: {
      main: '#228B22',
    },
    background: {
      default: '#1A202C',
      paper: '#1A202C',
    },
  },
});

export { BelloLight, BelloDark };
