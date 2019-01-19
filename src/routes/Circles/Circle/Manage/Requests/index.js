import React from 'react';
import List from './List';
import Container from './container';
import styles from './index.css';

export default Container(props => (
  <div className={styles.container}>
    <h3 className="general">
      Join Requests
    </h3>
    <List {...props} />
  </div>
));
