import React from 'react';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <h5>
      Important Notice
    </h5>
    <p>
      Every time you add funds Stripe will take 2.9% + 30¢.
      Currently there is no way around this.
      Sorry for the inconvenience.
    </p>
  </div>
);
