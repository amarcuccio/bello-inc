import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

const Navbar = (props) => {
  const { themeState, themeChange } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Bello & Co Inc.</Typography>
        <Switch checked={themeState} onChange={themeChange} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
