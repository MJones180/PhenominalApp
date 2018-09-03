import React from 'react';
import HeadTags from './headTags';
import Container from './container';
import List from './List';
import Header from './Header';
import styles from './index.css';

export default Container(({ change, charities, input }) => (
  <main className={styles.container}>
    <HeadTags />
    <Header change={change} input={input} />
    <List charities={charities} />
  </main>
));
