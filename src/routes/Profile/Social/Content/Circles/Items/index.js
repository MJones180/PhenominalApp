import React from 'react';
import _ from 'lodash';
import Item from '../Item';
import styles from './index.css';

export default ({ data }) => (
  <div className={styles.circles}>
    <div className={styles.testCreateCircle} onClick={() => {}}>
      <h4 className={styles.testCreateCircleName}>
        Create Circle
      </h4>
    </div>
    {_.map(data, ({ id, name }) => (
      <Item id={id} name={name} key={id} />
    ))}
  </div>
);
