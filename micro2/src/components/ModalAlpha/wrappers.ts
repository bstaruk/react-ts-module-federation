import styled from 'styled-components';

interface WrapperProps {
  $isOpen?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: ${(p) => (p.$isOpen ? 'flex' : 'none')};
  backdrop-filter: blur(2px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;

export const Overlay = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.theme.colors.wine};
  opacity: 0.8;
  text-indent: -99999em;
  overflow: hidden;
  outline: none;
  border: 0;
`;

export const Content = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  background-color: ${(p) => p.theme.colors.white};
  padding: 1.5rem;
  border-radius: 0.375rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 2rem;

  button {
    flex-shrink: 0;
    padding: 0.5rem;
  }
`;

export const Title = styled.h3`
  color: ${(p) => p.theme.colors.black};
  font-size: 1.5rem;
  letter-spacing: 0.03em;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.wine};
  border: 1px solid ${(p) => p.theme.colors.wine};
  padding: 0.75rem 1rem;
  font-size: 1rem;
  letter-spacing: 0.03em;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
