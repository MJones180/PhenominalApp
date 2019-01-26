import React from 'react';
import List from './List';
import styles from './index.css';

export default data => (
  <div className={styles.container}>
    <h3 className="general">
      Invites
    </h3>
    <List {...data} />
  </div>
);
