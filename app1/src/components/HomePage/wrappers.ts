import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
`;

export const TitleWrapper = styled.h1`
  color: ${(p) => p.theme.colors.wine};
  font-size: 2.5rem;
  font-weight: bold;
`;
