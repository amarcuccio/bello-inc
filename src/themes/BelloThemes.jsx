import { createMuiTheme } from '@material-ui/core/styles';

const BelloLight = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: '#18191A',
    },
    primary: {
      main: '#FFFFFF',
      contrastText: '#18191A',
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
      main: '#18191A',
      contrastText: '#DDDDDD',
    },
    secondary: {
      main: '#228B22',
    },
    background: {
      default: '#18191A',
      paper: '#18191A',
    },
  },
});

export { BelloLight, BelloDark };
