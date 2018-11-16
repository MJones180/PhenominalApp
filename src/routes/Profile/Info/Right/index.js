import React from 'react';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <p className={`large ${styles.bio}`}>
      My name is Michael Jones, founder and CEO of Phenominal. My favorite kinds of charities are the ones for the animals, because the kids don't matter! Father Michael
    </p>
    <div className={styles.date}>
      User since Sunday, Nov 4, 2018
    </div>
  </div>
);
