import React from 'react';
import Requests from './Requests';
import styles from './index.css';

export default ({ id }) => (
  <section className={styles.container}>
    <Requests id={id} />
  </section>
);
