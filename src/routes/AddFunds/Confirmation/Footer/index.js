import React from 'react';
import Button from 'components/Button';
import styles from './index.css';

export default ({ transactionID }) => (
  <div className={styles.footer}>
    <Button to="/profile" className={styles.back}>
      Back to profile
    </Button>
    <h4 className={styles.verification}>
      Verification ID: <span>{transactionID}</span>
    </h4>
  </div>
);
