import React from 'react';
import Container from './container';
import styles from './index.css';

export default Container(({ amountPassed, amountProcessed }) => (
  <h5 className={styles.text}>
    <span>{amountPassed}</span> will result in about <span>{amountProcessed}</span> being added to your account.
  </h5>
));
