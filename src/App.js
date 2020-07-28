import React, { useState, useEffect } from 'react';
import { Mode, useLightSwitch } from 'use-light-switch';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BelloLight, BelloDark } from './themes/BelloThemes';
import Header from './components/Header';
import Footer from './components/Footer';

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

  return (
    <>
      <ThemeProvider theme={darkState ? BelloDark : BelloLight}>
        <CssBaseline />
        <Header themeState={darkState} themeChange={handleThemeChange} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
