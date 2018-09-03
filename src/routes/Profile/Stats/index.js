import React from 'react';
import Container from './container';
import Items from './Items';
import styles from './index.css';

export default Container(data => (
  <section className={styles.container}>
    <h3 className="general">
      Stats
    </h3>
    <Items {...data} />
  </section>
));
