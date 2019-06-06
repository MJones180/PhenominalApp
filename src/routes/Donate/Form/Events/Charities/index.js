import React from 'react';
import _ from 'lodash';
import FormError from 'components/FormError';
import Container from './container';
import Charity from './Charity';
import styles from './index.css';

export default Container(({ events }) => (
  <div className={styles.container}>
    {_.map(events, (event, index) => <Charity {...event} key={index} />)}
    <FormError className={styles.error} name="checkedEvent" />
  </div>
));
