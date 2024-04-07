import React, { useState } from 'react';
import { Wrapper, DetailsButton, DetailsContent } from './wrappers';

const CardAlpha = React.lazy(() => import('micro1/CardAlpha'));
const ModalAlpha = React.lazy(() => import('micro2/ModalAlpha'));

type CardProps = {
  firstName: string;
  lastName: string;
  position: string;
  hometown: string;
  handedness: string;
  debutYear: number;
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
      {cards.map((card, cardIndex) => (
        <li key={cardIndex}>
          <React.Suspense fallback={<p>Loading...</p>}>
            <CardAlpha
              title={`${card.firstName} ${card.lastName} (${card.position})`}
            >
              <DetailsContent>
                <p>
                  Debuted in {card.debutYear} from {card.hometown}.
                </p>
              </DetailsContent>

              <DetailsButton type="button" onClick={() => setActiveCard(card)}>
                Learn more about {card.firstName} {card.lastName}
              </DetailsButton>
            </CardAlpha>
          </React.Suspense>
        </li>
      ))}

      <React.Suspense>
        <ModalAlpha
          isOpen={activeCard !== undefined}
          maxWidth={32}
          onClose={() => setActiveCard(undefined)}
          title={`${activeCard?.firstName} ${activeCard?.lastName}`}
        >
          {!!activeCard && (
            <DetailsContent>
              <p>
                <strong>Position:</strong> {activeCard.position}
              </p>
              <p>
                <strong>Batting:</strong> {activeCard.handedness}
              </p>
              <p>
                <strong>Hometown:</strong> {activeCard.hometown}
              </p>
              <p>
                <strong>Debut Year:</strong> {activeCard.debutYear}
              </p>
            </DetailsContent>
          )}
        </ModalAlpha>
      </React.Suspense>
    </Wrapper>
  );
};

export default CardList;
