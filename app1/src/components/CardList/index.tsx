import React, { useState } from 'react';
import { Wrapper, DetailsButton, DetailsContent } from './wrappers';

const CardAlpha = React.lazy(() => import('micro1/CardAlpha'));
const ContactFormAlpha = React.lazy(() => import('micro1/ContactFormAlpha'));
const ModalAlpha = React.lazy(() => import('micro2/ModalAlpha'));

type CardProps = {
  firstName: string;
  lastName: string;
  jobDescription: string;
  jobTitle: string;
  joinedYear: number;
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
              <DetailsContent>
                <p>
                  {card.jobTitle} since {card.joinedYear}
                </p>
                <DetailsButton
                  type="button"
                  onClick={() => setActiveCard(card)}
                >
                  Contact {card.firstName}
                </DetailsButton>
              </DetailsContent>
            </CardAlpha>
          </React.Suspense>
        </li>
      ))}

      <React.Suspense>
        <ModalAlpha
          closeLabel="Cancel"
          isOpen={activeCard !== undefined}
          onClose={() => setActiveCard(undefined)}
          title={`${activeCard?.firstName} ${activeCard?.lastName} -  ${activeCard?.jobTitle}`}
        >
          {!!activeCard && (
            <DetailsContent>
              <p>
                <em>Joined in {activeCard.joinedYear}</em>
              </p>
              <p>{activeCard.jobDescription}</p>
            </DetailsContent>
          )}

          <React.Suspense>
            <ContactFormAlpha
              key={activeCard?.firstName}
              title={`Contact ${activeCard?.firstName}`}
            />
          </React.Suspense>
        </ModalAlpha>
      </React.Suspense>
    </Wrapper>
  );
};

export default CardList;
