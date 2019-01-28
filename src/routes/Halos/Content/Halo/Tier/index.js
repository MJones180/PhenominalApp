import React from 'react';
import Dots from 'components/Dots';
import styles from './index.css';

export default ({ description, dotReward, tier }) => (
  <div className={styles.container}>
    <h4 className={styles.description}> {description} </h4>
    <h5 className={styles.tier}> {tier} </h5>
    <div className={styles.reward}>
      <h5>Reward:</h5>
      <Dots total={dotReward} />
    </div>
  </div>
);
