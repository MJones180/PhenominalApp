import React from 'react';
import Container from './container';
import styles from './index.css';

export default Container(({ invite }) => (
  <div className={styles.container}>
    <div onClick={invite} className={styles.button}>
      <p> → </p>
    </div>
  </div>
));
