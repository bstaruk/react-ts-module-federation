import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  column-gap: 1rem;
  background-color: ${(p) => p.theme.colors.wine};
  padding: 1.5rem;
  border-radius: 0.375rem;
`;

export const Title = styled.h3`
  color: ${(p) => p.theme.colors.white};
  font-size: 1.5rem;
  font-weight: bold;
`;
