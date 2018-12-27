import React from 'react';
import Balance from 'components/Balance';
import Container from './container';
import Events from './Events';
import styles from './index.css';

export default Container(data => (
  <section className={styles.container}>
    <div className={styles.header}>
      <h3 className={`general ${styles.title}`}>
        Today&apos;s Events
      </h3>
      <Balance />
    </div>
    <Events {...data} />
  </section>
));
