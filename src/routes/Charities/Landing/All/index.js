import React from 'react';
import Button from 'components/Button';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <h4 className={`general ${styles.title}`}>
      Discover More
    </h4>
    <Button to="/charities/all">
      View All Charities
    </Button>
  </section>
);
