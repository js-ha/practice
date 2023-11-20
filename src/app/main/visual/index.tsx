'use client';

import React from 'react';
import * as S from './style';

const Visual = () => {
  return (
    <section>
      <S.Container>
        <S.StyledImage src="/images/library.jpeg" alt="library" layout="fill" />
        <S.Text>
          <h3>
            "좋은 책을 읽는 것은 과거 몇 세기의 가장 훌륭한 사람들과 이야기를
            나누는 것과 같다."
          </h3>
          <p>-데카르트-</p>
        </S.Text>
      </S.Container>
    </section>
  );
};

export default Visual;