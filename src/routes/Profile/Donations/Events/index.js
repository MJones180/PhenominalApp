import React from 'react';
import _ from 'lodash';
import Container from './container';
import Charity from './Charity';
import styles from './index.css';

export default Container(({ charities }) => (
  <div className={styles.container}>
    {_.map(charities, (data, index) => <Charity key={index} {...data} />) }
  </div>
));
