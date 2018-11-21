import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import styles from './index.css';

export default ({ data, route }) => (
  _.map(data, ({ id, name }) => (
    <Link to={`/${route}/${id}`} className={styles.row} key={id}>
      <p> {name} </p>
    </Link>
  ))
);
