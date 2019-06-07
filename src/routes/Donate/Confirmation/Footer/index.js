import React from 'react';
import Button from 'components/Button';
import styles from './index.css';

export default ({ transactionID }) => (
  <div className={styles.footer}>
    <Button to="/charities" className={styles.back}>
      Back to charities
    </Button>
    <h4 className={styles.verification}>
      Verification ID: <span>{transactionID}</span>
    </h4>
  </div>
);
