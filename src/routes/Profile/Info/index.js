import React from 'react';
import Balance from 'components/Balance';
import Container from './container';
import Welcome from './Welcome';
import styles from './index.css';

export default Container(data => (
  <section className={styles.container}>
    <Welcome {...data} />
    <Balance />
  </section>
));
