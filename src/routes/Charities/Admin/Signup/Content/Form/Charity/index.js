import React from 'react';
import Input, { EINInput } from 'components/Input';
import styles from './index.css';

export default () => (
  <div className={styles.column}>
    <h3 className={styles.title}>
      Charity Information
    </h3>
    <Input name="name" label="Charity Name" />
    <EINInput name="ein" label="EIN" placeholder="00-0000000" />
    <Input name="url" label="Website URL" placeholder="https://example.com" />
  </div>
);
