import React from 'react';
import Link from 'components/Link';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <h3 className="general">
      All Charities
    </h3>
    <Link className={styles.link} to="/charities/suggest">
      Suggest a charity
    </Link>
  </div>
);
