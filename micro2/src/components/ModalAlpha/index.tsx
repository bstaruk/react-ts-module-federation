import React, { ReactNode } from 'react';
import { Wrapper, Overlay, Content, Title, Header } from './wrappers';

type ModalAlphaProps = {
  children?: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
};

const ModalAlpha = ({
  children,
  isOpen,
  onClose,
  title,
}: ModalAlphaProps): ReactNode => (
  <Wrapper {...{ isOpen }}>
    <Content>
      <Header>
        <Title>{title}</Title>

        <button type="button" onClick={() => onClose()}>
          Close Modal
        </button>
      </Header>

      {children}
    </Content>

    <Overlay type="button" onClick={() => onClose()} />
  </Wrapper>
);

export default ModalAlpha;
