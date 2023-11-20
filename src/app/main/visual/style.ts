'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

export const Container = styled.div`
  width: 100vw;
  height: 150px;
  position: relative;
  object-fit: cover;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  h3 {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
  }
  p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
