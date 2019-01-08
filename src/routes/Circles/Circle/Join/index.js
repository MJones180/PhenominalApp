import React from 'react';
import Button from 'components/Button';
import Container from './container';
import styles from './index.css';

export default Container(({ button, text }) => (
  <section className={styles.container}>
    <Button floatingBorder className={styles.button} {...button}>
      {text}
    </Button>
  </section>
));
