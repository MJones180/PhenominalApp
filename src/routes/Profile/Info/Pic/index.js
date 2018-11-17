import React from 'react';
import { image } from 'utils/endpoints';
import Boost from './Boost';
import Rank from './Rank';
import Progress from './Progress';
import styles from './index.css';

export default ({ boost, current, goal, rank, picture }) => (
  <div className={styles.container}>
    <Boost value={boost} />
    <div className={styles.picAlign}>
      <Progress count={current} goal={goal} />
      <img className={styles.pic} src={image('MichaelJones.jpg')} alt="Icon" />
    </div>
    <Rank rank={rank} current={current} goal={goal} />
  </div>
);
