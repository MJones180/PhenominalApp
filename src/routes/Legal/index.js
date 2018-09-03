import React from 'react';
import HeadTags from './headTags';
import Navigation from './Navigation';
import Content from './Content';
import styles from './index.css';

export default ({ match }) => (
  <main className={styles.container}>
    <HeadTags />
    <Navigation path={match.path} />
    <Content url={match.url} />
  </main>
);
