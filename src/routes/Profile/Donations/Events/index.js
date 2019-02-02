import React from 'react';
import _ from 'lodash';
import Container from './container';
import Charity from './Charity';
import SpecialFundraiser from './SpecialFundraiser';
import styles from './index.css';

export default Container(({ charities, specialFundraisers }) => (
  <div className={styles.container}>
    {_.map(specialFundraisers, (data, index) => <SpecialFundraiser key={index} {...data} />) }
    {_.map(charities, (data, index) => <Charity key={index} {...data} />) }
  </div>
));
