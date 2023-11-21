'use client';

import React, { cache, useEffect } from 'react';
import getBlogContent from '@/lib/api/blog';
import Visual from '@/app/main/visual';
import * as S from './style';

const Main = () => {
  useEffect(() => {
    const apiTest = cache(async () => {
      const res = await getBlogContent();
      console.log(res.data);
    });
    apiTest();
  }, []);
  return (
    <S.Section>
      <Visual />
    </S.Section>
  );
};

export default Main;
