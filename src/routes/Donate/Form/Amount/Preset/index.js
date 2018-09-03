import React from 'react';
import Container from './container';
import styles from './index.css';

export default Container(({ click, amount }) => (
  <div className={styles.option} onClick={click}>
    <p> { amount } </p>
  </div>
));
