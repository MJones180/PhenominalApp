import React from 'react';
import Input from 'components/Input';
import styles from './index.css';

export default () => (
  <div>
    <h4 className={styles.bottomTitle}>Account Information</h4>
    <Input name="email" label="Email" placeholder="email@example.com" />
    <Input name="representative" label="Representative" />
  </div>
);
