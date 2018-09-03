import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.css';

export default ({ path, route, name }) => (
  <h5>
    <NavLink to={`${path}/${route}`} activeClassName={styles.active} className={styles.text}>
      {name}
    </NavLink>
  </h5>
);
