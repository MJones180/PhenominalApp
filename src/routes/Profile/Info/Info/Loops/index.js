import React from 'react';
import { image } from 'utils/endpoints';
import styles from './index.css';

// Ensure a value is passed
export default ({ count }) => (!count ? '' : (
  <div className={styles.container}>
    <img className={styles.icon} src={image('assets/Random/Loop.png')} alt="Icon" />
    <h4 className={styles.count}> { count } </h4>
  </div>
));
