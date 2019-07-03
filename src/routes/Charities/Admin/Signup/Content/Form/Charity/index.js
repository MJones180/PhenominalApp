import React from 'react';
import Input, { EINInput } from 'components/Input';
import styles from './index.css';

export default () => (
  <div className={styles.column}>
    <h3 className={styles.title}>
      Charity Information
    </h3>
    <Input name="name" label="Charity Name" />
    <EINInput name="ein" label="EIN" />
    <Input name="url" label="Website URL" />
  </div>
);
