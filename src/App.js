import React, { useState, useEffect } from 'react';
import { Mode, useLightSwitch } from 'use-light-switch';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BelloLight, BelloDark } from './themes/BelloThemes';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Services from './pages/Services';
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
        <Router>
          <Header
            themeState={darkState}
            themeHandler={handleThemeChange}
            drawerState={isOpen}
            drawerHandler={handleSetOpen}
            isDesktop={isDesktop}
          />
          <div className={classes.root}>
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
              <Route exact path="/services">
                <Services />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default withStyles(styles)(App);
