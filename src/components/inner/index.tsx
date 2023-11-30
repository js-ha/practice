import React, { PropsWithChildren } from 'react';
import * as S from './style';

const Inner = ({ children }: PropsWithChildren) => {
  return <S.Container>{children}</S.Container>;
};

export default Inner;
