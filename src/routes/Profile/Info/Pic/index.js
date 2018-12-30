import React from 'react';
import Boost from './Boost';
import Rank from './Rank';
import Progress from './Progress';
import styles from './index.css';

export default ({ boost, count, goal, rank, picture }) => (
  <div className={styles.container}>
    <Boost value={boost} />
    <div className={styles.picAlign}>
      <Progress count={count} goal={goal} />
      <img className={styles.pic} src={picture} alt="Icon" />
    </div>
    <Rank rank={rank} count={count} goal={goal} />
  </div>
);
