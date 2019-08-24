import React from 'react';
import AddFunds from './AddFunds';
import CreateChange from './CreateChange';
import Donate from './Donate';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <h3 className={`general ${styles.title}`}>
      3 easy steps
    </h3>
    <AddFunds />
    <Donate />
    <CreateChange />
  </section>
);
