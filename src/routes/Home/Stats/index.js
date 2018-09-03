import React from 'react';
import Items from './Items';
import Container from './container';
import styles from './index.css';

export default Container(data => (
  <section className={styles.container}>
    <h1 className={styles.title}>
      There is no limit.
    </h1>
    <Items {...data} />
  </section>
));
