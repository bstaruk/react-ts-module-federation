import React from 'react';
import { Wrapper } from './wrappers';
import { CardAlphaProps } from 'micro1/CardAlpha';

const CardAlpha = React.lazy(() => import('micro1/CardAlpha'));

type CardListProps = {
  cards: CardAlphaProps[];
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <Wrapper>
      {/* TODO: Show a "skeleton card" as a fallback */}
      {cards.map((card, cardIndex) => (
        <li key={cardIndex}>
          <React.Suspense fallback={<p>Loading...</p>}>
            <CardAlpha {...card} />
          </React.Suspense>
        </li>
      ))}
    </Wrapper>
  );
};

export default CardList;
