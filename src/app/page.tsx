'use client';

import React, { cache, useEffect } from 'react';
import Main from './main';
import getBlogContent from '@/lib/api/blog';

const Home = () => {
  useEffect(() => {
    const apiTest = cache(async () => {
      const res = await getBlogContent();
      console.log(res.data);
    });
    apiTest();
  }, []);

  return <Main />;
};

export default Home;
