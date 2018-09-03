import React from 'react';
import Container from './container';
import Stat from './Stat';
import styles from './index.css';

export default Container(({ color, goal, percentage, timeRemaining, totalRaised }) => (
  <div className={color}>
    <div className={styles.stats}>
      <Stat title="Donated" val={totalRaised} />
      <Stat title="Goal" val={goal} />
      <Stat title="Time Remaining" val={timeRemaining} />
    </div>
    <div className={styles.percentage}>
      <span style={{ width: percentage }} width={percentage} />
    </div>
  </div>
));
