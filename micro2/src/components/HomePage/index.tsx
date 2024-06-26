import React, { useState } from 'react';
import ModalAlpha from 'components/ModalAlpha';
import { Wrapper } from './wrappers';

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <>
      <Wrapper>
        <button type="button" onClick={() => setModalIsOpen(true)}>
          Open Modal
        </button>
      </Wrapper>

      <ModalAlpha
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        title="Hello World"
      />
    </>
  );
};

export default HomePage;
