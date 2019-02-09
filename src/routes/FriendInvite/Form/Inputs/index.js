import React from 'react';
import Input, { Textarea } from 'components/Input';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <Input name="email" label="Recipient's Email" />
    <Textarea name="message" label="Message" />
  </div>
);
