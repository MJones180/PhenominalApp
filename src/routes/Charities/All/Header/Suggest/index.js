import React from 'react';
import { Link } from 'react-router-dom';
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
