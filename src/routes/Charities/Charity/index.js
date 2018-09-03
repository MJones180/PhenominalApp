import React from 'react';
import { filter } from 'graphql-anywhere';
import HeadTags from './headTags';
import Container from './container';
import About from './About';
import AboutFrag from './About/frag';
import Banner from './Banner';
import BannerFrag from './Banner/frag';
import Expenses from './Expenses';
import ExpensesFrag from './Expenses/frag';
import History from './History';

export default Container(({ data }) => (
  <main>
    <HeadTags charity={data.charity} />
    <Banner data={filter(BannerFrag, data.charity)} />
    <About data={filter(AboutFrag, data.charity)} />
    <Expenses data={filter(ExpensesFrag, data.charity)} />
    <History data={data.eventsPast} />
  </main>
));
