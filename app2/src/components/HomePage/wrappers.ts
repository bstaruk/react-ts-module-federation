import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 1rem;

  @media screen and (min-width: 760px) {
    padding: 2rem;
  }
`;

export const TitleWrapper = styled.h1`
  font-family: ${(p) => p.theme.fonts.serif};
  font-size: 1.75rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.primary};
  text-align: center;

  @media screen and (min-width: 760px) {
    font-size: 2rem;
  }
`;
