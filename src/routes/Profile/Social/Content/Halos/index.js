import React from 'react';
import Halo from './Halo';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <Halo name="LoopHalo" desc="Gain 250 Loops" level="Hard" />
    <Halo name="FollowHalo" desc="Follow 25 Charities" level="Easy" />
  </div>
);
