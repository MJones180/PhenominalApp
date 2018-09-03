import React from 'react';
import Container from './container';
import Header from './Header';
import Rows from './Rows';
import ScrollMessage from './ScrollMessage';
import styles from './index.css';

export default Container(({ columns, data, rowClick, ...props }) => (
  <div className={styles.overflow}>
    <div className={styles.container}>
      <ScrollMessage />
      <Header columns={columns} {...props} />
      <Rows columns={columns} data={data} rowClick={rowClick} />
    </div>
  </div>
));
