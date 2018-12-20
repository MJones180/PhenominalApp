import React from 'react';
import Container from './container';
import Upload from './Upload';
import styles from './index.css';

export default Container(data => (
  <div className={styles.container}>
    <h3 className="general">
      Picture
    </h3>
    <Upload {...data} />
  </div>
));
