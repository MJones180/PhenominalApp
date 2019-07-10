import React from 'react';
import Input from 'components/Input';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <Input name="name" label="Name" className={styles.name} />
    <Input name="acronym" label="Acronym" className={styles.acronym} />
  </div>
);
