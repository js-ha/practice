'use client';

import React, { useEffect } from 'react';
import Main from './main';

const Home = () => {
  useEffect(() => {
    const apiTest = async () => {
      const res = await fetch('http://localhost:3000/api/blog');
      console.log(res.json());
    };
    apiTest();
  }, []);

  return <Main />;
};

export default Home;
