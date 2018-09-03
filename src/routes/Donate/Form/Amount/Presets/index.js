import React from 'react';
import _ from 'lodash';
import Preset from '../Preset';
import styles from './index.css';

export default props => (
  <div className={styles.presets}>
    <h5 className={styles.title}>
      Presets
    </h5>
    <div className={styles.values}>
      {_.map([5, 10, 25, 50, 100], (value, index) => (
        <Preset key={index} value={value} {...props} />
      ))}
    </div>
  </div>
);
