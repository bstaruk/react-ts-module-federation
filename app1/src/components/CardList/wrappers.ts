import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 2rem;
  width: 100%;
  max-width: 50rem;
  padding: 2rem;
  list-style-type: none;
`;

export const DetailsButton = styled.button`
  background-color: ${(p) => p.theme.colors.wine};
  color: ${(p) => p.theme.colors.white};
  border: 0;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;

  &:hover {
    text-decoration: underline;
  }
`;
