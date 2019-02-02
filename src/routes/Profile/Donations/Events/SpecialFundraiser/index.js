import React from 'react';
import styles from './index.css';

export default ({ name }) => (
  <div className={styles.container}>
    <h3 className={styles.specialFundraiser}>
      Special Fundraiser
    </h3>
    <h1 className={`general ${styles.name}`}>
      {name}
    </h1>
  </div>
);
