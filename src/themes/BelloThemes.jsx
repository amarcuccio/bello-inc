import { createMuiTheme } from '@material-ui/core/styles';

const BelloLight = createMuiTheme({
  palette: {
    text: {
      primary: '#1A202C',
    },
    primary: {
      main: '#EDEEEE',
    },
    secondary: {
      main: '#228B22',
    },
    type: 'light',
    background: {
      default: '#EDEEEE',
      paper: '#EDEEEE',
    },
  },
});

const BelloDark = createMuiTheme({
  palette: {
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
    type: 'dark',
    background: {
      default: '#1A202C',
      paper: '#1A202C',
    },
  },
});

export { BelloLight, BelloDark };
