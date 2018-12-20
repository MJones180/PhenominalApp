import React from 'react';
import Container from './container';
import Form from './Form';
import styles from './index.css';

export default Container(data => (
  <section className={styles.container}>
    <h3 className="general">
      Information
    </h3>
    <Form {...data} />
  </section>
));
