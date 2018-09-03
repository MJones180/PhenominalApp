import React from 'react';
import Container from './container';
import Events from './Events';
import styles from './index.css';

export default Container(data => (
  <section className={styles.container}>
    <h3 className={`general ${styles.title}`}>
      Upcoming
    </h3>
    <Events {...data} />
  </section>
));
