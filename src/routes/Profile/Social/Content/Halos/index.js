import React from 'react';
import _ from 'lodash';
import Halo from './Halo';
import Container from './container';
import styles from './index.css';

export default Container(({ data }) => (
  <div className={styles.container}>
    {_.map(_.get(data, 'userHalos', {}), halo => (
      <Halo
        description={halo.description}
        dotReward={halo.dotReward}
        haloKey={halo.key}
        key={halo.key}
        tier={_.capitalize(halo.tier)}
      />
    ))}
  </div>
));
