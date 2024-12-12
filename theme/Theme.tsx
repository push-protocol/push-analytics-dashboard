// React, NextJS imports
import React from 'react';

// External Library imports
import { ThemeProvider } from 'styled-components';

// Internal Components imports
import { themeLight, themeDark } from './palette';

import { useTheme } from '../contexts/ThemeContext';
import { GlobalStyles } from './globalStyles';

const Theme = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
