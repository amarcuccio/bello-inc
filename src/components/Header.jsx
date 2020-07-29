import React, { useState, useEffect } from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavDrawer from './NavDrawer';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { Squeeze as Hamburger } from 'hamburger-react';
import Typography from '@material-ui/core/Typography';
import MainMenu from './MainMenu';
import { MenuItems } from '../config/GeneralConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/HeaderStyles';

const Header = (props) => {
  const [isOpen, setOpen] = useState(false);
  const { classes, themeState, themeChange } = props;
  const handleSetOpen = () => {
    setOpen(!isOpen);
  };
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
  useEffect(() => {
    if (isDesktop) {
      setOpen(false);
    }
  }, [isDesktop]);

  return (
    <div className={classes.root}>
      {isOpen && <NavDrawer open={isOpen} close={handleSetOpen} />}
      <AppBar className={classes.appbar} elevation={0}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <Hidden mdUp>
              <Hamburger
                distance="sm"
                size="28"
                color={themeState ? '#FFFFFF' : '#000000'}
                toggled={isOpen}
                toggle={handleSetOpen}
                aria-label="Open/close navigation drawer."
              />
            </Hidden>
            <Typography variant="h6" className={classes.title}>
              Bello & Co Inc.
            </Typography>
            <Hidden smDown>
              <MainMenu menuItems={MenuItems} />
            </Hidden>
            <Box className={classes.iconContainer}>
              <IconButton
                onClick={themeChange}
                aria-label="Toggle light/dark theme."
              >
                {themeState ? (
                  <FontAwesomeIcon icon={'sun'} className={classes.themeIcon} />
                ) : (
                  <FontAwesomeIcon
                    icon={'moon'}
                    className={classes.themeIcon}
                  />
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);
