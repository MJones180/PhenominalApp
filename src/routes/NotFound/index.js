import React from 'react';
import HeadTags from './headTags';
import styles from './index.css';

export default ({ location }) => (
  <main className={styles.container}>
    <HeadTags />
    <div className={styles.content}>
      <h2 className={styles.title}>
        Page Not Found
      </h2>
      <h3>
        { location.pathname }
      </h3>
    </div>
  </main>
);
