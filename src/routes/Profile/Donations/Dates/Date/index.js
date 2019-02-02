import React from 'react';
import styles from './index.css';

export default ({ active, dateClick, date }) => (
  <div className={`${styles.container} ${active && styles.active}`} onClick={() => dateClick(date)}>
    <h5> {date} </h5>
  </div>
);
