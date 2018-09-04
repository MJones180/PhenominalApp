import React from 'react';
import { Link } from 'react-router-dom';
import signout from 'utils/auth/signout';
import styles from './index.css';

export default ({ dropdownClick, hideDropdown }) => (
  <div onClick={dropdownClick} className={styles.dropdown}>
    <Link onClick={() => hideDropdown()} to={'/profile'}>
      Profile
    </Link>
    <Link onClick={() => hideDropdown()} to="/settings">
      Settings
    </Link>
    <div onClick={() => signout()}>
      Sign Out
    </div>
  </div>
);
