import React from 'react';
import * as S from './style';
import Image from 'next/image';

const Visual = () => {
  return (
    <section>
      <S.Container>
        <S.Wrapper>
          <Image src="/images/library.jpeg" alt="library" fill />
        </S.Wrapper>
        <S.Text>
          <S.Title>Frontend Developer</S.Title>
        </S.Text>
      </S.Container>
    </section>
  );
};

export default Visual;
