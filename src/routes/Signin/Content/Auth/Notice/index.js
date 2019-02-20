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
  <div className={styles.container}>
    <p>
      If you do not already have an account, one will be created for you upon authentication.
    </p>
    <p>
      By clicking ”Continue With”, you acknowledge that you have read our <Terms /> and <Privacy />, and that your continued use of the website is subject to these policies.
    </p>
  </div>
);
