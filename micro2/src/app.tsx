import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyle from 'styles/global-style';
import HomePage from 'components/HomePage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <ThemeProvider {...{ theme }}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  </StrictMode>,
);
