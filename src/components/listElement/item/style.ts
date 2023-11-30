import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  background-color: #e5d4ff;
  border-radius: 1rem;
`;

export const Wrapper = styled.picture`
  position: relative;
  display: block;
  width: 100%;
  height: 300px;
  img {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    width: 100%;
    height: auto;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  height: auto;
`;

export const DescWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const title = styled.h3`
  ${({ theme }) => theme.typography.size.title.t01}
`;

export const desc = styled.p`
  ${({ theme }) => theme.typography.size.subtitle.s01}
`;
