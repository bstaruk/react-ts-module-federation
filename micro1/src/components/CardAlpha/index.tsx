import React, { ReactNode } from 'react';
import { Wrapper, Title } from './wrappers';

type CardAlphaProps = {
  children?: ReactNode;
  title: string;
};

const CardAlpha = ({
  children,
  title = 'Hello World',
}: CardAlphaProps): ReactNode => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

export default CardAlpha;
