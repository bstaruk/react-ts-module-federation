import React from 'react';
import CardList from 'components/CardList';

import { Wrapper, TitleWrapper } from './wrappers';

/* This would be dynamic (ex: from Redux) in an actual app */
const cards = [
  {
    firstName: 'Fred',
    lastName: 'Flintstone',
    description:
      "The main character known for his catchphrase 'Yabba Dabba Doo!'",
  },
  {
    firstName: 'Wilma',
    lastName: 'Flintstone',
    description: "Fred's wife and a loving mother to Pebbles.",
  },
  {
    firstName: 'Barney',
    lastName: 'Rubble',
    description: "Fred's best friend and next-door neighbor.",
  },
  {
    firstName: 'Betty',
    lastName: 'Rubble',
    description: "Barney's wife and Wilma's best friend.",
  },
  {
    firstName: 'Pebbles',
    lastName: 'Flintstone',
    description: "Fred and Wilma's daughter.",
  },
  {
    firstName: 'Bamm-Bamm',
    lastName: 'Rubble',
    description:
      "Barney and Betty's adopted son, known for his immense strength.",
  },
  {
    firstName: 'Dino',
    lastName: '',
    description: "The Flintstones' pet dinosaur.",
  },
  {
    firstName: 'Mr.',
    lastName: 'Slate',
    description: "Fred's hot-headed boss at the rock quarry.",
  },
];

const HomePage = () => {
  return (
    <Wrapper>
      <TitleWrapper>Meet The Flinstones</TitleWrapper>
      <CardList {...{ cards }} />
    </Wrapper>
  );
};

export default HomePage;
