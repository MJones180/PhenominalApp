import React from 'react';
import Balance from 'components/Balance';
import Button from 'components/Button';
import HeadTags from './headTags';
import Items from './Items';
import styles from './index.css';

export default data => (
  <section className={styles.container}>
    <HeadTags />
    <div className={styles.header}>
      <h3 className={`general ${styles.title}`}>
        Confirmation
      </h3>
      <Balance />
    </div>
    <Items {...data} />
    <Button to="/charities">
      Back to charities
    </Button>
  </section>
);
