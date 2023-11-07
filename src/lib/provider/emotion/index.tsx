'use client';

import React, { PropsWithChildren } from 'react';
import theme from '@/lib/styles/theme';
import { ThemeProvider } from '@emotion/react';

const EmotionProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default EmotionProvider;
