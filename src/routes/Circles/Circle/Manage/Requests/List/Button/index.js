import React from 'react';
import Container from './container';
import styles from './index.css';

export default Container(({ accept, click }) => (
  <div className={styles.container}>
    <div onClick={click} className={`${styles.button} ${styles[accept ? 'accept' : 'deny']}`}>
      <p> {accept ? '✓' : '✕'} </p>
    </div>
  </div>
));
