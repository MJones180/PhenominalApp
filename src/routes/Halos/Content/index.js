import React from 'react';
import _ from 'lodash';
import Halo from './Halo';
import Container from './container';
import styles from './index.css';

export default Container(({ halos }) => (
  <div>
    <h3 className={`general ${styles.title}`}>
      All Halos
    </h3>
    {_.map(halos, halo => <Halo name={halo.key} {...halo} />)}
  </div>
));
