import React from 'react';
import _ from 'lodash';
import Halo from './Halo';
import Container from './container';
import styles from './index.css';

export default Container(({ data }) => (
  <div className={styles.container}>
    {_.map(_.get(data, 'userHalos', {}), halo => <Halo haloKey={halo.key} {...halo} />)}
  </div>
));
