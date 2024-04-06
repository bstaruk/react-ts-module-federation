import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const Title = styled.h4`
  color: ${(p) => p.theme.colors.wine};
  font-size: 1.375rem;
  letter-spacing: 0.03em;
  font-weight: 700;
`;
