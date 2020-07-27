import React, { useState } from 'react';
import { Mode, useLightSwitch } from 'use-light-switch';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BelloLight, BelloDark } from './themes/BelloThemes';
import Navbar from './components/Navbar';

const App = () => {
  const detectUserThemePref = useLightSwitch();
  const themePref = () => (detectUserThemePref === Mode.Dark ? true : false);

  const [darkState, setDarkState] = useState({ themePref });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

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
