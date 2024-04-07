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
  font-size: 1rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.background};
  background-color: ${(p) => p.theme.colors.secondary};
  border: 0;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const DetailsContent = styled.div`
  font-family: ${(p) => p.theme.fonts.sans};
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
