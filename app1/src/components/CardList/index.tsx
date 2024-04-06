import React, { useState } from 'react';
import { Wrapper } from './wrappers';
import { CardAlphaProps } from 'micro1/CardAlpha';

const CardAlpha = React.lazy(() => import('micro1/CardAlpha'));
const ModalAlpha = React.lazy(() => import('micro2/ModalAlpha'));

type CardListProps = {
  cards: CardAlphaProps[];
};

const CardList = ({ cards }: CardListProps) => {
  const [activeModal, setActiveModal] = useState<number | undefined>(undefined);

  return (
    <Wrapper>
      {/* TODO: Show a "skeleton card" as a fallback */}
      {cards.map((card, cardIndex) => (
        <li key={cardIndex}>
          <React.Suspense fallback={<p>Loading...</p>}>
            <CardAlpha {...card}>
              <button type="button" onClick={() => setActiveModal(cardIndex)}>
                More Details
              </button>
            </CardAlpha>
          </React.Suspense>
        </li>
      ))}

      <ModalAlpha
        isOpen={activeModal !== undefined}
        onClose={() => setActiveModal(undefined)}
        title="Hello World"
      />
    </Wrapper>
  );
};

export default CardList;
