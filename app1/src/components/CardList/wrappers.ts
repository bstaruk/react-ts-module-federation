import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: grid;
  gap: 1rem;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  list-style-type: none;

  @media screen and (min-width: 760px) {
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
`;

export const DetailsButton = styled.button`
  font-family: ${(p) => p.theme.fonts.sans};
  font-size: 0.875rem;
  letter-spacing: 0.02rem;
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
