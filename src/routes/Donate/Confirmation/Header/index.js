import React from 'react';
import styles from './index.css';

export default ({ date }) => (
  <div className={styles.header}>
    <h3 className={`general ${styles.title}`}>
      Donation Successful
    </h3>
    <h4>
      {date}
    </h4>
  </div>
);
