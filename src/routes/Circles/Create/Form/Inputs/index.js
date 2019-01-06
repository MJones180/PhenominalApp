import React from 'react';
import Input, { Textarea } from 'components/Input';
import Checkbox from 'components/Checkbox';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <Input name="name" label="Name" />
    <Textarea name="description" label="Description" />
    <Checkbox
      label="Allow anyone to join this Circle"
      name="open"
    />
  </div>
);
