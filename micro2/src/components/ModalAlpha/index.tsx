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
  closeLabel?: string;
  isOpen?: boolean;
  maxWidth?: string | number;
  onClose: () => void;
  title?: string;
};

const ModalAlpha = ({
  children,
  closeLabel = 'Close',
  isOpen,
  maxWidth,
  onClose,
  title,
}: ModalAlphaProps): ReactNode => (
  <Wrapper
    role="alertdialog"
    aria-modal="true"
    aria-hidden={!isOpen}
    $isOpen={!!isOpen}
  >
    <Content $maxWidth={maxWidth}>
      <Header>
        <Title>{title}</Title>

        <CloseButton type="button" onClick={() => onClose()}>
          {closeLabel}
        </CloseButton>
      </Header>

      {children}
    </Content>

    <Overlay type="button" onClick={() => onClose()} />
  </Wrapper>
);

export default ModalAlpha;
