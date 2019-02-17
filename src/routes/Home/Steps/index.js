import React from 'react';
import AddFunds from './AddFunds';
import CreateChange from './CreateChange';
import Donate from './Donate';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <h4 className={`general ${styles.title}`}>
      3 easy steps
    </h4>
    <div className={styles.boxes}>
      <AddFunds />
      <Donate />
      <CreateChange />
    </div>
  </section>
);
