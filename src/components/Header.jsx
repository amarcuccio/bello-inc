import React from 'react';
import NavDrawer from './NavDrawer';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { Squeeze as Hamburger } from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import MainMenu from './MainMenu';
import { MenuItems } from '../config/GeneralConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/HeaderStyles';

const Header = (props) => {
  const {
    classes,
    drawerState,
    drawerHandler,
    themeState,
    themeHandler,
    isDesktop,
  } = props;

  return (
    <div className={classes.root}>
      {drawerState && (
        <NavDrawer
          open={drawerState}
          close={drawerHandler}
          isDesktop={isDesktop}
        />
      )}
      <AppBar position="sticky" className={classes.appbar} elevation={0}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <Hidden mdUp>
              <Hamburger
                distance="sm"
                size="28"
                color={themeState ? '#FFFFFF' : '#000000'}
                toggled={drawerState}
                toggle={drawerHandler}
                aria-label="Open/close navigation drawer."
              />
            </Hidden>

            <Typography
              component={NavLink}
              to={'/'}
              variant="h6"
              aria-label={'Home'}
              className={classes.title}
            >
              Bello & Co Inc.
            </Typography>

            <Hidden smDown>
              <MainMenu menuItems={MenuItems} />
            </Hidden>
            <Box className={classes.iconContainer}>
              <IconButton
                onClick={themeHandler}
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
