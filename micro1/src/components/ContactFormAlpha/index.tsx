import React, { useState, ReactNode } from 'react';
import {
  Input,
  Label,
  SubmitButton,
  SuccessWrapper,
  TextArea,
  Title,
  Wrapper,
} from './wrappers';

type ContactFormAlphaProps = {
  title: string;
};

const ContactFormAlpha = ({
  title = 'Contact Us',
}: ContactFormAlphaProps): ReactNode => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <SuccessWrapper>
        <p>The form has been submitted.</p>
      </SuccessWrapper>
    );
  }

  return (
    <Wrapper {...{ onSubmit }}>
      <Title>{title}</Title>

      <Label>
        <span>Your Name:</span>
        <Input type="text" name="name" placeholder="Enter your name..." />
      </Label>

      <Label>
        <span>Your Message:</span>
        <TextArea name="name" placeholder="Enter your name..." />
      </Label>

      <SubmitButton type="submit">Submit Form</SubmitButton>
    </Wrapper>
  );
};

export default ContactFormAlpha;
