'use client';

import React, { cache, useEffect } from 'react';
import getBlogContent from '@/lib/api/blog';

const Main = () => {
  useEffect(() => {
    const apiTest = cache(async () => {
      const res = await getBlogContent();
      console.log(res.data);
    });
    apiTest();
  }, []);
  return <div>메인페이지</div>;
};

export default Main;
