import { createMuiTheme } from '@material-ui/core/styles';

const BelloLight = createMuiTheme({
  palette: {
    primary: {
      main: '#FAFAFA',
    },
    secondary: {
      main: '#228B22',
    },
    type: 'light',
    background: {
      default: '#FAFAFA',
      paper: '#FAFAFA',
    },
  },
});

const BelloDark = createMuiTheme({
  palette: {
    primary: {
      main: '#1A202C',
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
