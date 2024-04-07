import React, { useState } from 'react';
import { Wrapper, DetailsButton } from './wrappers';

const CardAlpha = React.lazy(() => import('micro1/CardAlpha'));
const ModalAlpha = React.lazy(() => import('micro2/ModalAlpha'));

type CardProps = {
  season: number;
  episodeNumber: number;
  title: string;
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
      {cards.map((card, cardIndex) => (
        <li key={cardIndex}>
          <React.Suspense fallback={<p>Loading...</p>}>
            <CardAlpha title={card.title}>
              <p>{card.description}</p>
              <DetailsButton type="button" onClick={() => setActiveCard(card)}>
                Learn more about Season {card.season}, Episode{' '}
                {card.episodeNumber}
              </DetailsButton>
            </CardAlpha>
          </React.Suspense>
        </li>
      ))}

      <React.Suspense>
        <ModalAlpha
          isOpen={activeCard !== undefined}
          maxWidth={40}
          onClose={() => setActiveCard(undefined)}
          title={activeCard?.title}
        >
          {!!activeCard?.description && <p>{activeCard.description}</p>}
        </ModalAlpha>
      </React.Suspense>
    </Wrapper>
  );
};

export default CardList;
