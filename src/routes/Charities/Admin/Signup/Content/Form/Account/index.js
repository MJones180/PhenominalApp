import React from 'react';
import Input from 'components/Input';
import styles from './index.css';

export default () => (
  <div className={styles.column}>
    <h3 className={styles.title}>
      Account Information
    </h3>
    <Input name="representative" label="Representative" />
    <div className={styles.bottom}>
      <h5 className={styles.info}>
        Email of the representative who will be accessing the charity&apos;s account.
      </h5>
      <Input name="email" label="Email" placeholder="email@example.com" />
    </div>
  </div>
);
