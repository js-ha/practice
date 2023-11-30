import React from 'react';
import { BlogContentProps } from '@/lib/api/dto';
import Item from './item';
import * as S from './style';

interface ListElementProps {
  postData: BlogContentProps[];
}

const ListElement = ({ postData }: ListElementProps) => {
  return (
    <S.Wrapper>
      {postData.map(data => (
        <div key={data._id}>
          <Item data={data} />
        </div>
      ))}
    </S.Wrapper>
  );
};

export default ListElement;
