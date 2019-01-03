import React from 'react';
import Button from 'components/Button';
import Container from './container';
import styles from './index.css';

export default Container(({ charityFollowed, click }) => (
  <section className={styles.container}>
    <Button floatingBorder className={styles.button} {...click}>
      {charityFollowed ? 'Unfollow' : 'Follow'}
    </Button>
  </section>
));
