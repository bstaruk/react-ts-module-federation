import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  max-width: 35rem;
  margin: 0 auto;
  list-style-type: none;

  @media screen and (min-width: 760px) {
    row-gap: 2rem;
  }
`;

export const DetailsButton = styled.button`
  font-family: ${(p) => p.theme.fonts.sans};
  font-size: 0.875rem;
  letter-spacing: 0.02rem;
  background-color: ${(p) => p.theme.colors.secondary};
  color: ${(p) => p.theme.colors.background};
  border: 0;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const DetailsContent = styled.div`
  font-family: ${(p) => p.theme.fonts.sans};
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;
