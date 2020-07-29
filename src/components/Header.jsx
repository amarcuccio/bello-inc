import React, { useState } from 'react';
import { HeaderElevation } from '../config/ScrollEvents';
import NavDrawer from './NavDrawer';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import { Squeeze as Hamburger } from 'hamburger-react';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/HeaderStyles';

const Navbar = (props) => {
  const [isOpen, setOpen] = useState(false);
  const { classes, themeState, themeChange } = props;
  const handleSetOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={classes.root}>
      {isOpen && <NavDrawer open={isOpen} close={handleSetOpen} />}
      <HeaderElevation {...props}>
        <AppBar className={classes.appbar}>
          <Container>
            <Toolbar className={classes.toolbar}>
              <Hidden mdUp>
                <Hamburger
                  distance="sm"
                  size="28"
                  color={themeState ? '#FFFFFF' : '#000000'}
                  toggled={isOpen}
                  toggle={handleSetOpen}
                />
              </Hidden>
              <Typography variant="h6" className={classes.title}>
                Bello & Co Inc.
              </Typography>
              {themeState ? (
                <FontAwesomeIcon
                  icon={'sun'}
                  className={classes.themeIcon}
                  onClick={themeChange}
                />
              ) : (
                <FontAwesomeIcon
                  icon={'moon'}
                  className={classes.themeIcon}
                  onClick={themeChange}
                />
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HeaderElevation>
    </div>
  );
};

export default withStyles(styles)(Navbar);
