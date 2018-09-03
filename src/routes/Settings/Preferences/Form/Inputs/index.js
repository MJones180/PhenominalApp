import React from 'react';
import Checkbox from 'components/Checkbox';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <Checkbox
      label="Allow Donation Confirmation Emails"
      name="allowDonationEmails"
    />
  </div>
);
