'use client';

import React from 'react';
import * as S from './style';
import Link from 'next/link';
import { MdOutlineBook } from 'react-icons/md';

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <Link href="/">
          <S.IconWrap>
            <MdOutlineBook />
          </S.IconWrap>
        </Link>
        <Link href="/">
          <S.Title>Book History 독서기록</S.Title>
        </Link>
      </S.Container>
    </S.Header>
  );
};

export default Header;
