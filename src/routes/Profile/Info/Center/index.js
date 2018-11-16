import React from 'react';
import Loops from './Loops';
import Name from './Name';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <Name fullName="Michael Jones" username="MichaelJones314" />
    <div className={styles.stats}>
      <Loops count={314} />
      <p className={`large ${styles.dots}`}>
        31,415 •
      </p>
    </div>
  </div>
);
