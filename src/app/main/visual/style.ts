'use client';

import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
`;

export const Wrapper = styled.picture`
  position: relative;
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
`;

export const Title = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Desc = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white};
`;
