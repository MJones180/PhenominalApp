import React from 'react';
import signout from 'utils/auth/signout';
import Link from 'components/Link';
import styles from './index.css';

export default ({ dropdownClick, hideDropdown }) => (
  <div onClick={dropdownClick} className={styles.dropdown}>
    <Link onClick={() => hideDropdown()} to="/profile">
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
