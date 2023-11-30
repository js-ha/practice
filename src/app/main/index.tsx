'use client';

import React, { cache, useEffect, useState } from 'react';
import getBlogContent from '@/lib/api/blog';
import Visual from '@/app/main/visual';
import * as S from './style';
import Profile from '@/components/profile';
import Inner from '@/components/inner';
import ListElement from '@/components/listElement';
import { BlogContentProps } from '@/lib/api/dto';

const Main = () => {
  const [postData, setPostData] = useState<BlogContentProps[]>([]);
  useEffect(() => {
    const apiTest = cache(async () => {
      const res = await getBlogContent();
      setPostData(res.data);
    });
    apiTest();
  }, []);
  return (
    <S.Section>
      <Visual />
      <Inner>
        <Profile />
        <ListElement postData={postData} />
      </Inner>
    </S.Section>
  );
};

export default Main;
