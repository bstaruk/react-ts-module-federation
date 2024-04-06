import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
`;

export const TitleWrapper = styled.h1`
  color: ${(p) => p.theme.colors.wine};
  font-size: 2.5rem;
  font-weight: bold;
`;
