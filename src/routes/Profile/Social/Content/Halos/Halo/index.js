import React from 'react';
import { image } from 'utils/endpoints';
import styles from './index.css';

export default ({ name, desc, level }) => (
  <div className={styles.container}>
    <img src={image(`halos/${name}.png`)} alt={name} className={styles.halo} />
    <div className={styles.text}>
      <h4 className={styles.desc}> {desc} </h4>
      <h5 className={styles.level}> {level} </h5>
    </div>
  </div>
);
