import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border: 2px solid ${(p) => p.theme.colors.navy};
  background-color: ${(p) => p.theme.colors.gray};
  padding: 1.5rem;
  border-radius: 0.375rem;
`;

export const Title = styled.h3`
  font-family: ${(p) => p.theme.fonts.serif};
  font-size: 1.375rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.navy};
`;
