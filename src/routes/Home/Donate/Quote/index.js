import React from 'react';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <p className={styles.symbol}>“</p>
    <p className={`${styles.text} large`}>
      {'      '} Great things are done by a series of small things brought together
    </p>
    <h5 className={styles.name}>
      Vincent Van Gogh
    </h5>
  </div>
);
