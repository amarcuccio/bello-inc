import React, { useState, useEffect } from 'react';
import { Mode, useLightSwitch } from 'use-light-switch';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BelloLight, BelloDark } from './themes/BelloThemes';
import Navbar from './components/Navbar';

const App = () => {
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
        <Navbar themeState={darkState} themeChange={handleThemeChange} />
      </ThemeProvider>
    </>
  );
};

export default App;
