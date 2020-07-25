import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
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
          <Switch checked={themeState} onChange={themeChange} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
