import React from 'react';
import { image } from 'utils/endpoints';
import { BasicInput } from 'components/Input';
import styles from './index.css';

export default ({ change, input }) => (
  <div className={styles.container}>
    <img src={image('assets/Random/Search.png')} className={styles.icon} alt="Search" />
    <BasicInput
      className={styles.input}
      label="Charity's Name or EIN"
      name="search"
      onChange={change}
      value={input}
    />
  </div>
);
