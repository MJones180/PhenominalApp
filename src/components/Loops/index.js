import React from 'react';
import { image } from 'utils/endpoints';
import styles from './index.css';

// Ensure a value is passed
export default ({ className, count, gained }) => (!count ? '' : (
  <div className={`${styles.container} ${className}`}>
    <img className={styles.icon} src={image('assets/Random/Loop.png')} alt="Icon" />
    <div className={styles.text}>
      <h4 className={styles.count}> { count } </h4>
      { (gained != undefined) && (<h5 className={styles.gained}> (+{ gained }) </h5>) }
    </div>
  </div>
));
