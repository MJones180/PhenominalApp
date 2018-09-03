import React from 'react';
import HeadTags from './headTags';
import Content from './Content';
import styles from './index.css';

export default () => (
  <main className={styles.container}>
    <HeadTags />
    <div className={styles.content}>
      <h2 className={styles.slogan}>
        Change starts with you.
      </h2>
      <div className={styles.signin}>
        <Content />
      </div>
    </div>
  </main>
);
