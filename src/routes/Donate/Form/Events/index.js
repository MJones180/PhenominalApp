import React from 'react';
import Items from './Items';
import styles from './index.css';

export default props => (
  <section className={styles.container}>
    <h3 className={`general ${styles.title}`}>
      Select your events:
    </h3>
    <Items {...props} />
  </section>
);
