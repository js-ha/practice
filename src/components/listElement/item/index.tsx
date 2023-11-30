import Image from 'next/image';
import React from 'react';
import * as S from './style';
import { BlogContentProps } from '@/lib/api/dto';

interface ListElementProps {
  data: BlogContentProps;
}

const Item = ({ data }: ListElementProps) => {
  return (
    <S.Container>
      <S.ImageWrapper>
        <S.Wrapper>
          <Image
            src="/images/geulgil.png"
            alt="project"
            width={645}
            height={292.9}
          />
        </S.Wrapper>
      </S.ImageWrapper>
      <S.DescWrapper>
        <S.title>{data.title}</S.title>
        <S.desc>{data.desc}</S.desc>
      </S.DescWrapper>
    </S.Container>
  );
};

export default Item;
