import React, { ReactNode } from 'react';
import { Wrapper, Title } from './wrappers';

type CardAlphaProps = {
  title?: string;
};

const CardAlpha = ({ title = 'Hello World' }: CardAlphaProps): ReactNode => (
  <Wrapper>
    <Title>{title}</Title>
  </Wrapper>
);

export default CardAlpha;
