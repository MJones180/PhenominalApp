import React from 'react';
import Container from './container';
import styles from './index.css';

export default Container(({ join, click }) => (
  <div className={styles.container}>
    <div onClick={click} className={`${styles.button} ${styles[join ? 'join' : 'decline']}`}>
      <p> {join ? '✓' : '✕'} </p>
    </div>
  </div>
));
