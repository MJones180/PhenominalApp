import React from 'react';
import Container from './container';
import Form from './Form';
import styles from './index.css';

export default Container(preferences => (
  <section className={styles.container}>
    <h3 className="general">
      Preferences
    </h3>
    <Form {...preferences} />
  </section>
));
