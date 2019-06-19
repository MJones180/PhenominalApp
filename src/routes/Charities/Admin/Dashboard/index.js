import React from 'react';
import HeadTags from './headTags';
import styles from './index.css';

export default () => (
  <main className={styles.container}>
    <HeadTags />
    <div className={styles.content}>
      <h2 className={styles.slogan}>
        Bazinga
      </h2>
    </div>
  </main>
);
