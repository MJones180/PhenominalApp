import React from 'react';
import Boost from './Boost';
import Rank from './Rank';
import Progress from './Progress';
import styles from './index.css';

export default ({ boost, current, goal, rank, picture }) => (
  <div className={styles.container}>
    <Boost value={boost} />
    <div className={styles.picAlign}>
      <Progress count={current} goal={goal} />
      <img className={styles.pic} src={picture} alt="Icon" />
    </div>
    <Rank rank={rank} current={current} goal={goal} />
  </div>
);
