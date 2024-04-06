import React from 'react';
import CardList from 'components/CardList';

import { Wrapper, TitleWrapper } from './wrappers';

/* This would be dynamic (ex: from Redux) in an actual app */
const cards = [
  {
    season: 1,
    episodeNumber: 1,
    title: 'The Flintstone Flyer',
    description:
      'Fred fakes illness to go on vacation with Wilma and Betty to Rock Vegas.',
  },
  {
    season: 1,
    episodeNumber: 2,
    title: 'Hot Lips Hannigan',
    description:
      'Fred impersonates a big-mouthed wrestler when the real wrestler gets sick.',
  },
  {
    season: 1,
    episodeNumber: 3,
    title: 'The Swimming Pool',
    description:
      "Fred and Barney build a swimming pool but are unaware they're on the bottom of a volcano.",
  },
  {
    season: 1,
    episodeNumber: 4,
    title: 'No Help Wanted',
    description: 'Fred loses his job and becomes a busboy at a diner.',
  },
  {
    season: 1,
    episodeNumber: 5,
    title: 'The Split Personality',
    description:
      "Fred pretends to be an executive to impress Wilma's old flame.",
  },
];

const HomePage = () => {
  return (
    <Wrapper>
      <TitleWrapper>The Flintstones - Season 1</TitleWrapper>
      <CardList {...{ cards }} />
    </Wrapper>
  );
};

export default HomePage;
