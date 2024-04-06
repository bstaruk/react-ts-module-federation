import React, { ReactNode } from 'react';
import { Wrapper, Title } from './wrappers';

type ContactFormAlphaProps = {
  title: string;
};

const ContactFormAlpha = ({
  title = 'Contact Us',
}: ContactFormAlphaProps): ReactNode => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default ContactFormAlpha;
