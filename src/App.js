import React, { useState, useEffect } from 'react';
import { Mode, useLightSwitch } from 'use-light-switch';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BelloLight, BelloDark } from './themes/BelloThemes';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/AppStyles';

library.add(fab, faSun, faMoon);

const App = (props) => {
  const [darkState, setDarkState] = useState(false);
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  const detectUserThemePref = useLightSwitch();
  useEffect(() => {
    detectUserThemePref === Mode.Dark
      ? setDarkState(true)
      : setDarkState(false);
  }, [detectUserThemePref]);

  const [isOpen, setOpen] = useState(false);
  const handleSetOpen = () => {
    setOpen(!isOpen);
  };
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  useEffect(() => {
    if (isDesktop) {
      setOpen(false);
    }
  }, [isDesktop]);

  const { classes } = props;

  return (
    <>
      <ThemeProvider theme={darkState ? BelloDark : BelloLight}>
        <CssBaseline />
        <Header
          themeState={darkState}
          themeHandler={handleThemeChange}
          drawerState={isOpen}
          drawerHandler={handleSetOpen}
        />
        <div className={classes.root}>
          <Home />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default withStyles(styles)(App);
