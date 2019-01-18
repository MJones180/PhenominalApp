import React from 'react';
import Container from './container';
import Header from './Header';
import Rows from './Rows';
import ScrollMessage from './ScrollMessage';
import styles from './index.css';

export default Container(({ columns, data, fieldLink, filter, headerClick, order }) => (
  <div className={styles.overflow}>
    <div className={styles.container}>
      <ScrollMessage />
      <Header columns={columns} filter={filter} headerClick={headerClick} order={order} />
      <Rows columns={columns} data={data} fieldLink={fieldLink} />
    </div>
  </div>
));
