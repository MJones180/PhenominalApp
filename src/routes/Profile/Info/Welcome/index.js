import React from 'react';
import styles from './index.css';

export default ({ name, createdAt }) => (
  <div>
    <h3 className="general">
      { name }
    </h3>
    <h5 className={styles.userSince}>
      User since { createdAt }
    </h5>
  </div>
);
