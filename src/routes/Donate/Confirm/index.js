import React from 'react';
import Button from 'components/Button';
import HeadTags from './headTags';
import Items from './Items';
import styles from './index.css';

export default data => (
  <section className={styles.container}>
    <HeadTags />
    <h3 className={`general ${styles.title}`}>
      Confirmation
    </h3>
    <Items {...data} />
    <Button to="/charities">
      Back to charities
    </Button>
  </section>
);
