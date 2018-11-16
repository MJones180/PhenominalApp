import React from 'react';
import { image } from 'utils/endpoints';
import Progress from './Progress';
import Container from './container';
import styles from './index.css';

export default Container(({ boost, currentLoops, goal, rank }) => (
  <div className={styles.container}>
    <p className={styles.boost}> 3x </p>
    <div className={styles.picProgress}>
      <Progress count={currentLoops} goal={goal} />
      <img className={styles.pic} src={image('MichaelJones.jpg')} alt="Icon" />
    </div>
    <p className={styles.rank}> {rank} </p>
    <p className={styles.frac}> {currentLoops} / {goal} </p>
  </div>
));
