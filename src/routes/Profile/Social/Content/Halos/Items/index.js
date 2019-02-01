import React from 'react';
import _ from 'lodash';
import { compactDate } from 'utils/time';
import Halo from './Halo';
import styles from './index.css';

export default ({ data }) => (
  <div className={styles.container}>
    {_.map(_.get(data, 'userHalos', {}), halo => (
      <Halo
        date={compactDate(halo.date)}
        description={halo.description}
        haloKey={halo.key}
        key={halo.key}
        tier={_.capitalize(halo.tier)}
      />
    ))}
  </div>
);
