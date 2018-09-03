import React from 'react';
import HeadTags from './headTags';
import Questions from './Questions';
import Support from './Support';
import styles from './index.css';

export default () => (
  <main className={styles.container}>
    <HeadTags />
    <h3 className="general">
      Help Center
    </h3>
    <Questions />
    <Support />
  </main>
);
