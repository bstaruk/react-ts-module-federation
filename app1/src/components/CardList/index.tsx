import React, { useState } from 'react';
import { Wrapper, DetailsButton } from './wrappers';

const CardAlpha = React.lazy(() => import('micro1/CardAlpha'));
const ContactFormAlpha = React.lazy(() => import('micro1/ContactFormAlpha'));
const ModalAlpha = React.lazy(() => import('micro2/ModalAlpha'));

type CardProps = {
  firstName: string;
  lastName: string;
  description: string;
};

type CardListProps = {
  cards: CardProps[];
};

const CardList = ({ cards }: CardListProps) => {
  const [activeCard, setActiveCard] = useState<CardProps | undefined>(
    undefined,
  );

  return (
    <Wrapper>
      {/* TODO: Show a "skeleton card" as a fallback */}
      {cards.map((card, cardIndex) => (
        <li key={cardIndex}>
          <React.Suspense fallback={<p>Loading...</p>}>
            <CardAlpha title={`${card.firstName} ${card.lastName}`}>
              <div>
                <DetailsButton
                  type="button"
                  onClick={() => setActiveCard(card)}
                >
                  Contact {card.firstName}
                </DetailsButton>
              </div>
            </CardAlpha>
          </React.Suspense>
        </li>
      ))}

      <React.Suspense>
        <ModalAlpha
          isOpen={activeCard !== undefined}
          onClose={() => setActiveCard(undefined)}
          title={
            activeCard
              ? `${activeCard.firstName} ${activeCard.lastName}`
              : undefined
          }
        >
          {!!activeCard?.description && <p>{activeCard.description}</p>}

          <React.Suspense>
            <ContactFormAlpha title={`Contact ${activeCard?.firstName}`} />
          </React.Suspense>
        </ModalAlpha>
      </React.Suspense>
    </Wrapper>
  );
};

export default CardList;
