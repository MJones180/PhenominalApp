import React from 'react';
import Link from 'components/Link';
import styles from './index.css';

const Terms = () => (
  <Link to="/legal/terms" general>
    Terms of Service
  </Link>
);

const Privacy = () => (
  <Link to="/legal/privacy" general>
    Privacy Policy
  </Link>
);

export default () => (
  <p className={`large ${styles.message}`}>
    By using our site, you acknowledge that you have read and understand our <Privacy /> and our <Terms />.
  </p>
);
