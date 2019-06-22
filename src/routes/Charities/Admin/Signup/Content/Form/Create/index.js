import React from 'react';
import Link from 'components/Link';
import { Submit } from 'components/Button';
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
  <div className={styles.column}>
    <Submit className={styles.button} center>
      Create Charity
    </Submit>
    <h6 className={styles.notice}>
      By clicking ”Create Charity”, you agree to our <Terms /> and <Privacy />.
    </h6>
  </div>
);
