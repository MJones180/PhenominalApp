import React from 'react';
import { image } from 'utils/endpoints';
import styles from './index.css';

export default ({ description, haloKey, tier }) => (
  <div className={styles.container}>
    <img src={image(`halos/${haloKey}.png`)} alt={haloKey} className={styles.halo} />
    <div className={styles.text}>
      <h4 className={styles.description}> {description} </h4>
      <h5 className={styles.tier}> {tier} </h5>
    </div>
  </div>
);
