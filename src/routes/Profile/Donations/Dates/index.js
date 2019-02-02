import React from 'react';
import _ from 'lodash';
import Date from './Date';
import styles from './index.css';

export default ({ activeDate, dateClick, dates }) => (
  <div className={styles.container}>
    <h4> Dates </h4>
    {_.map(dates, (date, index) => (
      <Date
        key={index}
        active={activeDate == date}
        dateClick={dateClick}
        date={date}
      />
    ))}
  </div>
);
