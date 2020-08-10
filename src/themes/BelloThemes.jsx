import { createMuiTheme } from '@material-ui/core/styles';

const BelloLight = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: '#131313',
    },
    primary: {
      main: '#FFFFFF',
      contrastText: '#131313',
    },
    secondary: {
      main: '#228B22',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
  },
});

const BelloDark = createMuiTheme({
  palette: {
    type: 'dark',
    text: {
      primary: '#DDDDDD',
    },
    primary: {
      main: '#111111',
      contrastText: '#DDDDDD',
    },
    secondary: {
      main: '#228B22',
    },
    background: {
      default: '#111111',
      paper: '#111111',
    },
  },
});

export { BelloLight, BelloDark };
