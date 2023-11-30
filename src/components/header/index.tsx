import React from 'react';
import * as S from './style';
import Link from 'next/link';
import LogoIcon from '/public/images/icon/puzzle.svg';

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.LogoWrapper>
          <Link href="/">
            <S.IconWrap>
              <LogoIcon />
            </S.IconWrap>
          </Link>
          <Link href="/">
            <S.Title>JISU BLOG</S.Title>
          </Link>
        </S.LogoWrapper>
        <div>
          <S.CategoryTitle>About</S.CategoryTitle>
          <S.CategoryTitle>Blog</S.CategoryTitle>
          <S.CategoryTitle>Tags</S.CategoryTitle>
          <S.CategoryTitle>Projects</S.CategoryTitle>
        </div>
      </S.Container>
    </S.Header>
  );
};

export default Header;
