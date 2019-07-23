/*
NAME
  Loops [Component]
USAGE
  return <Loops {...props} />
PROPS
  - count: [int] loop score
  - gained: [boolean] loop gained
*/

import React from 'react';
import { image } from 'utils/endpoints';
import styles from './index.css';

// Ensure a value is passed
export default ({ className, count, gained }) => (!count ? '' : (
  <div className={`${styles.container} ${className}`}>
    <img className={styles.icon} src={image('assets/Loop.png')} alt="Icon" />
    <div className={styles.text}>
      <h4 className={styles.count}> { count } </h4>
      { gained && (<h5 className={styles.gained}> (+1) </h5>) }
    </div>
  </div>
));
