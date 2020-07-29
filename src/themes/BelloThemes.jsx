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
      main: '#1F232D',
    },
    secondary: {
      main: '#228B22',
    },
    type: 'dark',
    background: {
      default: '#1F232D',
      paper: '#1F232D',
    },
  },
});

export { BelloLight, BelloDark };
