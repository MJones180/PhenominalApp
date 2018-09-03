import React from 'react';
import { filter } from 'graphql-anywhere';
import HeadTags from './headTags';
import Container from './container';
import Info from './Info';
import InfoFrag from './Info/frag';
import Settings from './Settings';
import Stats from './Stats';
import StatsFrag from './Stats/frag';
import Transactions from './Transactions';
import TransactionsFrag from './Transactions/frag';

export default Container(({ data }) => (
  <main>
    <HeadTags />
    <Info data={filter(InfoFrag, data.currentUser)} />
    <Stats data={filter(StatsFrag, data)} />
    <Transactions data={filter(TransactionsFrag, data.currentUser)} />
    <Settings />
  </main>
));
