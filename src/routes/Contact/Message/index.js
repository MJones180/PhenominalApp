import React from 'react';
import Form from './Form';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <h3 className="general">
      Send us a message
    </h3>
    <p className={`large ${styles.info}`}>
      Feel free to contact us if you have any questions, comments, or concerns.
    </p>
    <Form />
  </section>
);
