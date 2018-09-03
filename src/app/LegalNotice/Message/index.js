import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';

const Terms = () => (
  <Link to="/legal/terms" className="general">
    Terms of Service
  </Link>
);

const Privacy = () => (
  <Link to="/legal/privacy" className="general">
    Privacy Policy
  </Link>
);

export default () => (
  <p className={`large ${styles.message}`}>
    By using our site, you acknowledge that you have read and understand our <Privacy /> and our <Terms />.
  </p>
);
