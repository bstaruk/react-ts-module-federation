import React from 'react';
import CardList from 'components/CardList';

import { Wrapper, TitleWrapper } from './wrappers';

const HomePage = () => {
  return (
    <Wrapper>
      <TitleWrapper>Hello World</TitleWrapper>
      <React.Suspense fallback={<p>Loading...</p>}>
        <CardList
          cards={[
            {
              title: 'Test 1',
            },
            {
              title: 'Test 2',
            },
            {
              title: 'Test 3',
            },
          ]}
        />
      </React.Suspense>
    </Wrapper>
  );
};

export default HomePage;
