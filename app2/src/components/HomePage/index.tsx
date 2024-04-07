import React from 'react';
import CardList from 'components/CardList';

import { Wrapper, TitleWrapper } from './wrappers';

/* This would be dynamic (ex: from Redux) in an actual app */
const cards = [
  {
    firstName: 'Rafael',
    lastName: 'Devers',
    position: '3B',
    hometown: 'San Pedro de Macorís, Dominican Republic',
    handedness: 'Left-handed',
    debutYear: 2017,
  },
  {
    firstName: 'Trevor',
    lastName: 'Story',
    position: 'SS',
    hometown: 'Irving, Texas',
    handedness: 'Right-handed',
    debutYear: 2022,
  },
  {
    firstName: 'Triston',
    lastName: 'Casas',
    position: '1B',
    hometown: 'Pembroke Pines, Florida',
    handedness: 'Left-handed',
    debutYear: 2023,
  },
  {
    firstName: 'Masataka',
    lastName: 'Yoshida',
    position: 'DH',
    hometown: 'Amami, Kagoshima, Japan',
    handedness: 'Left-handed',
    debutYear: 2022,
  },
  {
    firstName: 'Tyler',
    lastName: "O'Neill",
    position: 'RF',
    hometown: 'Maple Ridge, British Columbia, Canada',
    handedness: 'Right-handed',
    debutYear: 2023,
  },
  {
    firstName: 'Ceddanne',
    lastName: 'Rafaela',
    position: 'CF',
    hometown: 'Willemstad, Curaçao',
    handedness: 'Switch hitter',
    debutYear: 2023,
  },
  {
    firstName: 'Connor',
    lastName: 'Wong',
    position: 'C',
    hometown: 'Pearl City, Hawaii',
    handedness: 'Right-handed',
    debutYear: 2022,
  },
  {
    firstName: 'Jarren',
    lastName: 'Duran',
    position: 'LF',
    hometown: 'Sacramento, California',
    handedness: 'Right-handed',
    debutYear: 2022,
  },
  {
    firstName: 'Enmanuel',
    lastName: 'Valdez',
    position: '2B',
    hometown: 'Baní, Dominican Republic',
    handedness: 'Right-handed',
    debutYear: 2023,
  },
];

const HomePage = () => {
  return (
    <Wrapper>
      <TitleWrapper>2024 Starting Lineup</TitleWrapper>
      <CardList {...{ cards }} />
    </Wrapper>
  );
};

export default HomePage;
