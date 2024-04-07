import React from 'react';
import CardList from 'components/CardList';

import { Wrapper, TitleWrapper } from './wrappers';

/* This would be dynamic (ex: from Redux) in an actual app */
const cards = [
  {
    firstName: 'Alex',
    lastName: 'Cora',
    jobTitle: 'Manager',
    jobDescription:
      "Responsible for overseeing the Boston Red Sox baseball team's day-to-day operations and on-field strategy.",
    joinedYear: 2018,
  },
  {
    firstName: 'Chaim',
    lastName: 'Bloom',
    jobTitle: 'Chief Baseball Officer',
    jobDescription:
      'Responsible for overseeing all baseball operations for the Boston Red Sox, including player acquisitions, roster management, and scouting.',
    joinedYear: 2019,
  },
  {
    firstName: 'Hyun-Il',
    lastName: 'Cho',
    jobTitle: 'General Manager',
    jobDescription:
      'Responsible for managing player contracts, trades, and other day-to-day operations of the Boston Red Sox baseball team.',
    joinedYear: 2020,
  },
  {
    firstName: 'Raquel',
    lastName: 'Ferreira',
    jobTitle: 'Assistant General Manager',
    jobDescription:
      'Assists the general manager in various tasks related to player personnel, contract negotiations, and roster management.',
    joinedYear: 2020,
  },
  {
    firstName: 'Jason',
    lastName: 'Varitek',
    jobTitle: 'Special Assistant to the General Manager',
    jobDescription:
      'Provides support to the general manager in player evaluations, scouting, and other baseball operations.',
    joinedYear: 2012,
  },
  {
    firstName: 'Dave',
    lastName: 'Bush',
    jobTitle: 'Pitching Coach',
    jobDescription:
      'Responsible for coaching and developing the pitching staff of the Boston Red Sox, including strategy and mechanics.',
    joinedYear: 2019,
  },
  {
    firstName: 'Tommy',
    lastName: 'Goodwin',
    jobTitle: 'First Base Coach',
    jobDescription:
      'Responsible for coaching base running and outfield defense for the Boston Red Sox.',
    joinedYear: 2021,
  },
  {
    firstName: 'Will',
    lastName: 'Venable',
    jobTitle: 'Third Base Coach',
    jobDescription:
      'Responsible for coaching base running and infield defense for the Boston Red Sox.',
    joinedYear: 2021,
  },
];

const HomePage = () => {
  return (
    <Wrapper>
      <TitleWrapper>Meet Our Staff</TitleWrapper>
      <CardList {...{ cards }} />
    </Wrapper>
  );
};

export default HomePage;
