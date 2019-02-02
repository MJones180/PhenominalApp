import React from 'react';
import Container from './container';
import Dates from './Dates';
import Empty from './Empty';
import Events from './Events';
import styles from './index.css';

export default Container(({ activeDate, dateClick, dates, donations, isEmpty }) => (
  <section className={styles.container}>
    <h3 className="general">
      Donations
    </h3>
    { isEmpty ? <Empty /> : (
      <div className={styles.donations}>
        <Dates activeDate={activeDate} dateClick={dateClick} dates={dates} />
        <Events activeDate={activeDate} donations={donations} />
      </div>
    )}
  </section>
));
