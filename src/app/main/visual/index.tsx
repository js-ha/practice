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
          <S.Title>
            "좋은 책을 읽는 것은 과거 몇 세기의 가장 훌륭한 사람들과 이야기를
            나누는 것과 같다."
          </S.Title>
          <S.Desc>-데카르트-</S.Desc>
        </S.Text>
      </S.Container>
    </section>
  );
};

export default Visual;
