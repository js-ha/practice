'use client';

import styled from '@emotion/styled';

export const Header = styled.header`
  height: 50px;
  background: ${({ theme }) => theme.colors.black};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    font-size: 1.5rem;
    transition: font-size 0.3s;
  }
`;

export const IconWrap = styled.div`
  svg {
    color: #aaa;
    font-size: 40px;
  }
`;
