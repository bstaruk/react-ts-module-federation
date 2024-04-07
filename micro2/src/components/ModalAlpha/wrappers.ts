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
  background-color: ${(p) => p.theme.colors.navy};
  opacity: 0.8;
  text-indent: -99999em;
  overflow: hidden;
  outline: none;
  border: 0;
`;

interface ContentProps {
  $maxWidth?: string | number;
}

export const Content = styled.div<ContentProps>`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: ${(p) => {
    if (typeof p.$maxWidth === 'number') {
      return `${p.$maxWidth}rem`;
    }

    if (typeof p.$maxWidth === 'string') {
      return p.$maxWidth;
    }

    return '50rem';
  }};
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
  font-family: ${(p) => p.theme.fonts.serif};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.navy};
`;

export const CloseButton = styled.button`
  font-family: ${(p) => p.theme.fonts.sans};
  font-size: 0.875rem;
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.red};
  border: 2px solid ${(p) => p.theme.colors.red};
  border-radius: 0.375rem;
  padding: 0.75rem 1.25rem;
  letter-spacing: 0.03em;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
