import React from 'react';
import HeadTags from './headTags';
import Container from './container';
import styles from './index.css';

export default Container(data => (
  <main className={styles.container}>
    <HeadTags />
    <h1>{data.ein}</h1>
  </main>
));
