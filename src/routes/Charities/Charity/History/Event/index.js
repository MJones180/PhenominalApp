import React from 'react';
import Container from './container';
import Stat from '../Stat';
import Percentage from '../Percentage';
import styles from './index.css';

export default Container(({ date, donated, goal, donations, percentage }) => (
  <div className={styles.container}>
    <div className={styles.stats}>
      <Stat value={date} title="Date" />
      <Stat value={donated} title="Donated" />
      <Stat value={goal} title="Goal" />
      <Stat value={donations} title="Donations" />
    </div>
    <Percentage value={percentage} />
  </div>
));
