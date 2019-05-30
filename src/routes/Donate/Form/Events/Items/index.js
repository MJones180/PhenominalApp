import React from 'react';
import _ from 'lodash';
import Checkbox from 'components/Checkbox';
import FormError from 'components/FormError';
import styles from './index.css';

export default ({ events }) => (
  <div className={styles.container}>
    <Checkbox
      item={events[0].id}
      label={events[0].name}
      name="checkedEvents"
    />
    <FormError className={styles.error} name="checkedEvents" />
  </div>
);
