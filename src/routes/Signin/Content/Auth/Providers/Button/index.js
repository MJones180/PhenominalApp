import React from 'react';
import { image } from 'utils/endpoints';
import styles from './index.css';

export default ({ click, name }) => (
  <div className={`${styles.button} ${styles[name]}`} onClick={click}>
    <div className={styles.logo}>
      <img src={image(`logos/${name}Logo.png`)} alt={`Continue with ${name}`} />
    </div>
    <span> Continue With {name} </span>
  </div>
);
