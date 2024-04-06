import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  list-style-type: none;

  @media screen and (min-width: 760px) {
    row-gap: 2rem;
  }
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
