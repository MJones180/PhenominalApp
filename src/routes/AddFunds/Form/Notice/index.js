import React from 'react';
import Link from 'components/Link';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <h4 className={styles.title}>
      Important Notice
    </h4>
    <p className="large">
      <span className={styles.bold}>2.2% + 30¢</span> is deducted for Stripe processing fees. Learn more <Link general to="/help">here</Link>.
      Sorry for any inconvenience.
    </p>
  </div>
);
