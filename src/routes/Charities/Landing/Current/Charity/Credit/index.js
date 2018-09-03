import React from 'react';
import styles from './index.css';

export default ({ credit }) => (
  !credit ? false : (
    <div className={styles.credit}>
      Photograph by {credit}
    </div>
  )
);
