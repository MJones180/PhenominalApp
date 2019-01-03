import React from 'react';
import Container from './container';
import Table from './Table';
import styles from './index.css';

export default Container(data => (
  <div className={styles.container}>
    <h3 className="general">
      Followed Charities
    </h3>
    <Table {...data} />
  </div>
));
