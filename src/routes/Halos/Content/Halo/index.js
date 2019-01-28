import React from 'react';
import _ from 'lodash';
import { image } from 'utils/endpoints';
import Tier from './Tier';
import styles from './index.css';

export default ({ name, tiers }) => (
  <div className={styles.container}>
    <img src={image(`halos/${name}.png`)} alt={name} className={styles.halo} />
    <div className={styles.tiers}>
      {_.map(tiers, data => <Tier key={data.description} {...data} />)}
    </div>
  </div>
);
