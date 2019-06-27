import React from 'react';
import Link from 'components/Link';
import styles from './index.css';

export default () => (
  <p className={`large ${styles.text}`}>
    If you are a charity representative, consider using the charity <Link to="/charities/admin/signup" general>Sign Up</Link>.
  </p>
);
