import React, { ReactNode } from 'react';
import { Wrapper, Content, Title } from './wrappers';

type ModalAlphaProps = {
  children?: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  title: string;
};

const ModalAlpha = ({
  children,
  isOpen,
  onClose,
  title = 'Hello World',
}: ModalAlphaProps): ReactNode => (
  <Wrapper {...{ isOpen }}>
    <Content>
      <button type="button" onClick={() => onClose()}>
        Close Modal
      </button>

      <Title>{title}</Title>
      {children}
    </Content>
  </Wrapper>
);

export default ModalAlpha;
