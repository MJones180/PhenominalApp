import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { image } from 'utils/endpoints';
import User from './User';
import styles from './index.css';

export default () => (
  <header className={styles.container}>
    <Link to="/" className={styles.logo}>
      <img src={image('logos/logoFull.png', { width: 700 })} alt="Logo" />
    </Link>
    <div className={styles.tabs}>
      <Link to="/" className={styles.tab}>
        Home
      </Link>
      <NavLink to="/charities" activeClassName={styles.tabActive} className={styles.tab}>
        Charities
      </NavLink>
      <NavLink to="/help" activeClassName={styles.tabActive} className={styles.tab}>
        Help
      </NavLink>
      <User />
    </div>
  </header>
);
