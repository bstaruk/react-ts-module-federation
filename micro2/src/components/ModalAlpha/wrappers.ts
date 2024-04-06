import styled from 'styled-components';

interface WrapperProps {
  isOpen?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: ${(p) => (p.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${(p) => p.theme.colors.wine};
  padding: 1.5rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  column-gap: 1rem;
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
