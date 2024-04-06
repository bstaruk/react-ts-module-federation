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
      {/* TODO: Show a "skeleton card" as a fallback */}
      {cards.map((card, cardIndex) => (
        <li key={cardIndex}>
          <React.Suspense fallback={<p>Loading...</p>}>
            <CardAlpha title={card.title}>
              <div>
                <DetailsButton
                  type="button"
                  onClick={() => setActiveCard(card)}
                >
                  Learn more
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
          title={activeCard?.title}
        >
          {!!activeCard?.description && <p>{activeCard.description}</p>}
        </ModalAlpha>
      </React.Suspense>
    </Wrapper>
  );
};

export default CardList;