import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border: 1px solid ${(p) => p.theme.colors.wine};
  padding: 1.5rem;
  border-radius: 0.375rem;
`;

export const Title = styled.h3`
  color: ${(p) => p.theme.colors.black};
  font-size: 1.5rem;
  letter-spacing: 0.03em;
  font-weight: 700;
`;
