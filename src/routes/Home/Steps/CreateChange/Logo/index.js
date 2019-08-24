import React from 'react';
import { image } from 'utils/endpoints';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <div className={styles.outlineX} />
    <div className={styles.outlineY} />
    <div className={styles.circle} />
    <img src={image('logos/logoIcon.png')} className={styles.logo} alt="Logo" />
  </div>
);
