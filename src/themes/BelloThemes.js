import { createMuiTheme } from '@material-ui/core/styles';

const BelloLight = createMuiTheme({
  palette: {
    primary: {
      main: '#FAFAFA',
    },
    secondary: {
      main: '#228B22',
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
  },
});

export { BelloLight, BelloDark };
