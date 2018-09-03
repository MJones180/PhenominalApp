import React from 'react';
import _ from 'lodash';
import Checkbox from 'components/Checkbox';
import FormError from 'components/FormError';
import styles from './index.css';

export default ({ events }) => (
  <div className={styles.container}>
    {_.map(events, ({ id, name }, index) => (
      <Checkbox
        item={id}
        key={index}
        label={name}
        name="checkedEvents"
      />
    ))}
    <FormError className={styles.error} name="checkedEvents" />
  </div>
);
