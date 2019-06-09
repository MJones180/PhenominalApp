import React from 'react';
import Box from '../Box';
import Stat from './Stat';
import Container from './container';
import styles from './index.css';

export default Container(({ goal, percentage, timeRemaining, totalRaised }) => (
  <Box title="Progress">
    <div className={styles.stats}>
      <Stat title="Donated" val={totalRaised} />
      <Stat title="Goal" val={goal} />
      <Stat title="Time Remaining" val={timeRemaining} />
    </div>
    <div className={styles.percentage}>
      <span style={{ width: percentage }} width={percentage} />
    </div>
  </Box>
));
