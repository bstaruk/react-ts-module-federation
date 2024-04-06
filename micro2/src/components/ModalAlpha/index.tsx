import React, { ReactNode } from 'react';
import {
  CloseButton,
  Content,
  Header,
  Overlay,
  Title,
  Wrapper,
} from './wrappers';

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
  <Wrapper $isOpen={isOpen}>
    <Content>
      <Header>
        <Title>{title}</Title>

        <CloseButton type="button" onClick={() => onClose()}>
          Close Modal
        </CloseButton>
      </Header>

      {children}
    </Content>

    <Overlay type="button" onClick={() => onClose()} />
  </Wrapper>
);

export default ModalAlpha;
