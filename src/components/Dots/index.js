/*
NAME
  Dots [Component]
USAGE
  return <Dots {...props} />
PROPS
  - total: [int] total dots
  - gained: [int] number of dots gained
*/

import React from 'react';
import { comma } from 'utils/number';
import styles from './index.css';

export default ({ className, total, gained }) => (
  <div className={`${styles.container} ${className}`}>
    <div className={styles.text}>
      <p className="large"> {comma(total)} </p>
      { gained && (<p className={styles.gained}> (+{ gained }) </p>) }
    </div>
    <h3 className={styles.dot}>•</h3>
  </div>
);
