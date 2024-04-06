import React from 'react';
import { Wrapper, TitleWrapper } from './wrappers';

const CardAlpha = React.lazy(() => import('micro1/CardAlpha'));

const HomePage = () => {
  return (
    <Wrapper>
      <TitleWrapper>Hello World</TitleWrapper>
      <React.Suspense fallback={<p>Loading...</p>}>
        <CardAlpha title="Test" />
      </React.Suspense>
    </Wrapper>
  );
};

export default HomePage;
