import React from 'react';
import _ from 'lodash';
import Item from './Item';
import Container from './container';
import styles from './index.css';

export default Container(({ feed }) => (
  <div className={styles.container}>
    {_.map(feed, ({ id, ...props }) => <Item key={id} {...props} />)}
  </div>
));
