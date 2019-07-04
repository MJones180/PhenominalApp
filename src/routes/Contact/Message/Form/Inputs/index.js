import React from 'react';
import Input, { Textarea } from 'components/Input';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <Input eggshell name="name" label="Name" />
    <Input eggshell name="email" label="Email" placeholder="email@example.com" />
    <Textarea eggshell name="message" label="Message" />
  </div>
);
