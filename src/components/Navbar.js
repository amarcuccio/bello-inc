import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { Brightness4, Brightness7 } from '@material-ui/icons';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  const { themeState, themeChange } = props;
  return (
    <AppBar position="static">
      <Container>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" className={styles.title}>
            Bello & Co Inc.
          </Typography>
          <Tooltip title="Toggle light/dark theme">
            {themeState ? (
              <Brightness7 onClick={themeChange} />
            ) : (
              <Brightness4 onClick={themeChange} />
            )}
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
