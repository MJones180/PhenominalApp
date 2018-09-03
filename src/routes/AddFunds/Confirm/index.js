import React from 'react';
import Button from 'components/Button';
import HeadTags from './headTags';
import Container from './container';
import Box from './Box';
import styles from './index.css';

export default Container(data => (
  <section className={styles.container}>
    <HeadTags />
    <h3 className={`general ${styles.title}`}>
      Confirmation
    </h3>
    <Box {...data} />
    <Button to="/profile">
      Back to profile
    </Button>
  </section>
));
