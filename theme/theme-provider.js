import React, { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider as MUIThemeProvider, Theme } from '@material-ui/core/styles';
import { getThemeByBrand } from './theme-mapper';

export const ThemeContext = React.createContext([]);

export const ThemeProvider = ({ brand, children }) => {
  const [theme, setTheme] = useState(getThemeByBrand(brand));
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
