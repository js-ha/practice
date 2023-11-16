'use client';

import React, { PropsWithChildren } from 'react';
import theme from '@/lib/styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import globals from '@/lib/styles/global';

const EmotionProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globals} />
      {children}
    </ThemeProvider>
  );
};

export default EmotionProvider;
