import React from 'react';
import Items from './Items';
import styles from './index.css';

export default ({ username }) => (
  <section className={styles.container}>
    <h3 className="general">
      Feed
    </h3>
    <Items username={username} />
  </section>
);
