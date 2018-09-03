import React from 'react';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <blockquote className={styles.quote}>
      Great things are done by a series of small things brought together.
    </blockquote>
    <h4 className={styles.source}>
      - Vincent Van Gogh
    </h4>
  </section>
);
